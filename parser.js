const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs').promises;


let convertToPlainText = async(path) => {
	let plaintext = await fs.readFile(path, 'utf8')//
	let buffer = ""
	for (var i = 0; i < plaintext.length; i++) {
	  let char = plaintext.charAt(i);
	  if (char == "\b") {
	  	  buffer = buffer.slice(0,-1)
	  } else {
	  	  buffer += char
	  }
	}
	return buffer
}

let processHelpText = async(path) => {
	let plaintext = await convertToPlainText(path)
	plaintext += "EOF"
	// regex to extract subcommands
	let matches = [...plaintext.matchAll(/^([A-Z][A-Z\s]+)$(.*?)(?=^[A-Z]|EOF$)/gms)]
	// console.log(matches)
	let parsed = matches.reduce((dict, match) => {
		let key = match[1].toLowerCase().split(' ').join('-')
		let value = match[2].trim()
		dict[key] = value
		return dict
	},{})
	return parsed
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
}

let processOptionText = (text) => {
	if (!text || text.length == 0) {
		return
	}

	text += "EOF"

	// first pass! (This should more or less always work)
	let normal = /^\s+(?=-)(?:(-[a-zA-Z])?,?\s)?(--[a-z-]+)?.*?\s+(.*?)(?=^\s+-|^[^\s])/gms

	// This is a bit more tailored
	let withArgs = /^\s+(?=-)(?:(-[a-zA-Z])?,?\s?)?(--[a-z-]+)?([=\s](?=[^\s]).*?\s)?\s+(.*?)(?=^\s+-|^[^\s])/gms
	/*
	^\s+(?=-)                matches if the first non-whitespace character of a lines is '-'
	(?:(-[a-zA-Z])?,?\s)?	 optionally matches short flag (- with single alphabet character) as well as an optional delimimeter
	(--[a-z-]+)?             optionally matches long flag (-- with many alphabet characters or dashes)
	([=\s](?=[^\s]).*?\s)?   optionally matches arguments (whether specified with =ARG or KEY=ARG)
	\s+                      match many spaces preceeding description
	(.*?)(?=^\s+-|^[^\s])    match the description (any character) up until the next line is a flag (has a '-') or is not indented.
	*/

	let indexOf = {
		shortFlag: 1,
		longFlag: 2,
		arg: 3,
		description: 4
	}

	let matches = [...text.matchAll(withArgs)]
	let options = matches.map((match) => {
		let short = match[indexOf.shortFlag]
		let long = match[indexOf.longFlag]
		let description = match[indexOf.description].replace(/\n\s+/gm, " ")

		let arg = {}
		if (indexOf.arg) {
			arg.description =  match[indexOf.args]
		}

		let name = [short, long].filter(f => { return f != null })
		
		return { name, description, args: arg }
	})

	// console.log(options)
	return options
}

let root = "docker";
(async ()=> {
	let directory = `./${root}/`
	let files = (await exec('ls ' + directory)).stdout.split('\n').slice(0, -1)//.slice(0,5)
	let master = []
	for (file of files) {
		console.log(file)
		let components = file.split('.').slice(0,-1)
	

		try {
			let text = await fs.readFile(directory + file, 'utf8')
			let name = components.slice(-1).pop()
			let description = text.split('\n')[0]
			let options = await processOptionText(text)

			master.push({ name, description, options, subcommands: [], seq:  components.slice(0,-1) })
		} catch (e) {
			console.log(e)
		}
	}
	fs.writeFile(`./${root}-master.json`, JSON.stringify(master, null, 4))
})();


//(NAME)$\n(.*?)(DESCRIPTION)$\n(.*)(SYNOPSIS)$\n(.*)(OPTIONS)$\n(.*)((OUTPUT)$\n(.*))?((AVAILABLE SERVICES)$\n(.*))?((SEE ALSO)$\n(.*))
//^([A-Z][A-Z\s]+)$(.*?)(?=^[A-Z]|(.*)$)