module.exports = {
  apps: [
    {
      name: 'aljoodmed-t',
      exec_mode: 'cluster',
      instances: "max",
      script: './.output/server/index.mjs',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST:"0.0.0.0",
        PORT: 35000,
      },
    },
  ],
}
