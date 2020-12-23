# cli-help-parser


### Legacy script usage:

The scripts need to be tweaked and modified in order to work with new CLI tools.

Steps:

1. Update `root` or `rootName` variable in each script to the name of the CLI tool (eg. docker)

2. Create a folder with the same name as the CLI tool / `root`


3. `node scraper.js`
	
	Attempts to scrape help text for all subcommands - there can be false positive. Will create a new file for each subcommand in the `root` folder.

	Format is `command.subcommand1.subcommand2.txt`

	You can set the recursion depth by updating the `maxDepth` variable.


4. `node parser.js`
	
	Looks in the `root` folder and builds a file named `root`-master.json. This is where the regexes are defined; they may need to be tweaked based on --help format.

5. `node converter.js` 
	
	Takes the `root`-master.json and converts it into the final `root`.js file.


----

I am planning on bundling these into a single tool and parameterizing the settings. This is temporary! 