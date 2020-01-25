var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/tomoohive.github.io',// <-- replace yourproject with your repo name
    {
        branch: 'master',
        repo: 'https://github.com/tomoohive/tomoohive.github.io.git',
        user: {
            name: 'tomoohive',
            email: 'Your Email address'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)