const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;

let convert = (command) => {
	let optsArray = command.optionsArray
	var options = []
	if (optsArray) {
		options = optsArray.map(opt => {
			return {
				name: opt.flags.map(flag => { return "--" + flag }),
				description: opt.description,
				args: {
					name: opt.argType
				}
			}
		})
	}

	return {
		name: command.subcommand ?  command.subcommand : (command.service ? command.service : command.root),
		description: command.description,
		subcommands: [],
		options: options
	}
}

let build = (name) => {
	return {
		name,
		description: "",
		subcommands: []
	}
}

let walk = (tree, path, transaction) => {
	let key = path.shift()
	var filter = tree.subcommands.reduce((dict, command) => {

		if (command.name == key) {
			dict.node = command
		} else {
			dict.other.push(command)
		}

		return dict
	}, {node: null, other: []})

	var node = filter.node

	if (!node) {
		node = build(key)
	}

	var updatedNode;
	if (path.length == 0) {
		updatedNode = transaction(node)
	} else {
		updatedNode = walk(node, path, transaction)
	}

	tree.subcommands = filter.other.concat(updatedNode)
	return tree
}

async function runConversion(rootName) {
	let path = `./${rootName}/${rootName}-master.json`
	let master = {}
	let data = await fs.readFile(path, 'utf-8')
	let json = JSON.parse(data)

	var root = {
		name: rootName,
		description: "",
		subcommands: []
	}

	json.forEach(command => {
		root = walk(root, command.seq, (node) => {
			delete command.seq
			command.subcommands = node.subcommands
			return command
		})
	})

	let out = "var completionSpec = " + util.inspect(root, {showHidden: false, depth: null, maxArrayLength: null})//+ JSON.stringify(root, null, 4)
	fs.writeFile(`./${rootName}/${rootName}.js`, out);
}

// function stringify(obj_from_json) {
//     if (typeof obj_from_json !== "object" || Array.isArray(obj_from_json)){
//         // not an object, stringify using native function
//         return JSON.stringify(obj_from_json);
//     }
//     // Implements recursive object serialization according to JSON spec
//     // but without quotes around the keys.
//     let props = Object
//         .keys(obj_from_json)
//         .map(key => `${key}:${stringify(obj_from_json[key])}`)
//         .join(",");
//     return `{${props}}`;
// }

module.exports = runConversion;