module.exports = {
  apps: [
    {
      name: 'aljoodmed-w',
      exec_mode: 'fork',
      instances: 1,
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
