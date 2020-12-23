const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;


let root = "docker"

let exportHelp = async (args) => { 
	let help = `${args.join(' ')} --help`
	let path = `./${root}/${args.join('.')}.txt`
	// help([root])
	await exec(help + ' > ' + path);

	return path
}

let parseHelp = async (path) => {

    const data = await fs.readFile(path, 'utf8');
    console.log(data)
    let normal = /^\s{4}([a-z][a-z-:]+)\s.*?\s+([A-Za-z\s\.\-',\/\:]*?)(?=$|\n\n)/gms
    let permissive = /^\s+([0-9a-z][a-z-:]+)\s.*?\s{2,}([A-Za-z\s\.\-',\/]*?)(?=$|\n\n)/gms
    let commands = [...data.matchAll(permissive)].map(match => {
    	let command = match[1]
    	let description = match[2]
    	return {command, description}
    })

    
    return commands

}

let processCommand = async(args, depth) => {
	console.log(depth, args.join(' '))

	if (depth == 0) {
		console.log("Hit max depth!")
		return
	}

	let path = await exportHelp(args)
	let commands = await parseHelp(path)
	console.log(commands)
	// let subcommands = []
	for (let i = 0; i < commands.length; i++) {
		try {
			await processCommand(args.concat([commands[i].command]), depth - 1)
		} catch (e) {
			console.log(e)
		}
		
	}
	return commands
}

(async ()=> {
	await processCommand([root], 2)
})();