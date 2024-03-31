module.exports = {
  apps : [
    {
      name: 'lifdom',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'build'
    }
  ],
  deploy : {
    // "production" is the environment name
    prod : {
      user: 'test',
      host: ['31.129.43.97'],
      ref: 'origin/master',
      repo: 'https://github.com/pshenopro/moslift.git',
      ssh_options: ['ForwardAgent=yes'],
      path: '/home/test/moslift',
      'post-deploy' : 'yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env prod'
    }
  }
}
