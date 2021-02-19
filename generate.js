const scraper = require('./scraper');
const parser = require('./parser');
const converter = require('./converter');


var commands = process.argv.slice(2);


const generateSpec = async (rootCmd) => {
        // 1. Run scraper.js

        console.log("generating")
        await scraper([rootCmd], 2);

        console.log("parsing");
        // 2. Run parser.js
        await parser(rootCmd);
    
        console.log("converting...");
        // 3. Run converter.js
        await converter(rootCmd);
}

// Check if it has a man page

for(var i = 0; i < commands.length; i++) {
    var rootCmd = commands[i];
    console.log(rootCmd);
    generateSpec(rootCmd);
}