var completionSpec = {
  name: 'heroku',
  description: '',
  subcommands: [
    {
      name: 'access',
      description: 'list who has access to an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'accounts',
      description: 'USAGE',
      options: [],
      subcommands: []
    },
    {
      name: 'auth',
      description: 'check 2fa status',
      options: [],
      subcommands: []
    },
    {
      name: 'autocomplete',
      description: 'display autocomplete installation instructions',
      options: [
        {
          name: [ '-r', '--refresh-cache' ],
          description: 'refresh cache only (ignores displaying instructions) ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'buildpacks',
      description: 'display the buildpacks for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'certs',
      description: 'list SSL certificates for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'ci',
      description: 'display the most recent CI runs for the given pipeline',
      options: [
        {
          name: [ '-a', '--app' ],
          description: 'app name\n',
          args: {}
        },
        {
          name: [ '-p', '--pipeline' ],
          description: 'name of pipeline\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format\n',
          args: {}
        },
        {
          name: [ '--watch' ],
          description: 'keep running and watch for new and update tests ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'clients',
      description: 'list your OAuth clients',
      options: [
        {
          name: [ '-j', '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'config',
      description: 'display the config vars for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-j', '--json' ],
          description: 'output config vars in json format\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '-s', '--shell' ],
          description: 'output config vars in shell format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'container',
      description: 'Use containers to build and deploy Heroku apps',
      options: [],
      subcommands: []
    },
    {
      name: 'domains',
      description: 'list domains for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-h', '--help' ],
          description: 'show CLI help\n',
          args: {}
        },
        {
          name: [ '-j', '--json' ],
          description: 'output in json format\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '-x', '--extended' ],
          description: 'show extra columns\n',
          args: {}
        },
        {
          name: [ '--columns' ],
          description: 'only show provided columns (comma-separated)\n',
          args: {}
        },
        {
          name: [ '--csv' ],
          description: 'output is csv format\n',
          args: {}
        },
        {
          name: [ '--filter' ],
          description: 'filter property by partial string matching, ex: name=foo\n',
          args: {}
        },
        {
          name: [ '--no-header' ],
          description: 'hide table header from output\n',
          args: {}
        },
        {
          name: [ '--sort' ],
          description: "property to sort by (prepend '-' for descending) ",
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'drains',
      description: 'display the log drains of an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'features',
      description: 'list available app features',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'git',
      description: 'manage local git repository for app',
      options: [],
      subcommands: []
    },
    {
      name: 'help',
      description: 'CLI to interact with Heroku',
      options: [],
      subcommands: []
    },
    {
      name: 'keys',
      description: 'display your SSH keys',
      options: [
        {
          name: [ '-l', '--long' ],
          description: 'display full SSH keys\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'labs',
      description: 'list experimental features',
      options: [
        {
          name: [ '-a', '--app' ],
          description: 'app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'display as json ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'local',
      description: 'run heroku app locally',
      options: [
        {
          name: [ '-e', '--env' ],
          description: 'location of env file (defaults to .env)\n',
          args: {}
        },
        {
          name: [ '-f', '--procfile' ],
          description: 'use a different Procfile\n',
          args: {}
        },
        {
          name: [ '-p', '--port' ],
          description: 'port to listen on ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'logs',
      description: 'display recent log output',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-d', '--dyno' ],
          description: 'only show output from this dyno type (such as "web" or "worker")\n',
          args: {}
        },
        {
          name: [ '-n', '--num' ],
          description: 'number of lines to display\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '-s', '--source' ],
          description: 'only show output from this source (such as "app" or "heroku")\n',
          args: {}
        },
        {
          name: [ '-t', '--tail' ],
          description: 'continually stream logs\n',
          args: {}
        },
        {
          name: [ '--force-colors' ],
          description: 'force use of colors (even on non-tty output) ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'maintenance',
      description: 'display the current maintenance status of app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'members',
      description: 'list members of a team',
      options: [
        {
          name: [ '-r', '--role' ],
          description: 'filter by role\n',
          args: {}
        },
        {
          name: [ '-t', '--team' ],
          description: 'team to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format\n',
          args: {}
        },
        {
          name: [ '--pending' ],
          description: 'filter by pending team invitations ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'notifications',
      description: 'display notifications',
      options: [
        {
          name: [ '-a', '--app' ],
          description: 'app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--all' ],
          description: 'view all notifications (not just the ones for the current app)\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format\n',
          args: {}
        },
        {
          name: [ '--read' ],
          description: 'show notifications already read ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'orgs',
      description: 'list the teams that you are a member of',
      options: [
        {
          name: [ '--enterprise' ],
          description: 'filter by enterprise teams\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'pg',
      description: 'show database information',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'pipelines',
      description: 'list pipelines you have access to',
      options: [
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'plugins',
      description: 'list installed plugins',
      options: [
        {
          name: [ '--core' ],
          description: 'show core plugins ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'ps',
      description: 'list dynos for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'display as json ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'psql',
      description: 'open a psql shell to the database',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-c', '--command' ],
          description: 'SQL command to run\n',
          args: {}
        },
        {
          name: [ '-f', '--file' ],
          description: 'SQL file to run\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--credential' ],
          description: 'credential to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'redis',
      description: 'gets information about redis',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'regions',
      description: 'list available regions for deployment',
      options: [
        {
          name: [ '--common' ],
          description: 'show regions for common runtime\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format\n',
          args: {}
        },
        {
          name: [ '--private' ],
          description: 'show regions for private spaces ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'releases',
      description: 'display the releases for an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) app to run command against\n',
          args: {}
        },
        {
          name: [ '-n', '--num' ],
          description: 'number of releases to show\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output releases in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'reviewapps',
      description: 'manage reviewapps in pipelines',
      options: [],
      subcommands: []
    },
    {
      name: 'run',
      description: 'run a one-off process inside a heroku dyno',
      options: [
        {
          name: [ '-a', '--app' ],
          description: '(required) parent app used by review apps\n',
          args: {}
        },
        {
          name: [ '-e', '--env' ],
          description: "environment variables to set (use ';' to split multiple vars)\n",
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use\n',
          args: {}
        },
        {
          name: [ '-s', '--size' ],
          description: 'dyno size\n',
          args: {}
        },
        {
          name: [ '-x', '--exit-code' ],
          description: 'passthrough the exit code of the remote command\n',
          args: {}
        },
        {
          name: [ '--no-notify' ],
          description: 'disables notification when dyno is up (alternatively use HEROKU_NOTIFICATIONS=0)\n',
          args: {}
        },
        {
          name: [ '--no-tty' ],
          description: 'force the command to not run in a tty\n',
          args: {}
        },
        { name: [ '--type' ], description: 'process type ', args: {} }
      ],
      subcommands: []
    },
    {
      name: 'sessions',
      description: 'list your OAuth sessions',
      options: [
        {
          name: [ '-j', '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'spaces',
      description: 'list available spaces',
      options: [
        {
          name: [ '-t', '--team' ],
          description: 'team to use\n',
          args: {}
        },
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    { name: 'status', description: '', subcommands: [] },
    {
      name: 'teams',
      description: 'list the teams that you are a member of',
      options: [
        {
          name: [ '--json' ],
          description: 'output in json format ',
          args: {}
        }
      ],
      subcommands: []
    },
    {
      name: 'update',
      description: 'update the heroku CLI',
      options: [],
      subcommands: []
    },
    {
      name: 'webhooks',
      description: 'list webhooks on an app',
      options: [
        {
          name: [ '-a', '--app' ],
          description: 'app to run command against\n',
          args: {}
        },
        {
          name: [ '-r', '--remote' ],
          description: 'git remote of app to use ',
          args: {}
        }
      ],
      subcommands: []
    },
    { name: 'your', description: '', subcommands: [] }
  ]
}