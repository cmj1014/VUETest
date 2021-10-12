'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'
const client = require("scp2");
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const uploading = ora("正在上传中……")
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))

    uploading.start();
    // 部署上线
    client.scp('./dist', {
      host: '10.25.10.133',
      username: 'root',
      password: 'sight123',
      path: '/apps/xinsight/sts/tomcat7/webapps/stscfgsvr2'
    }, function (err) {
      if (err) {
        console.log(err)
      } else {
        uploading.stop();
        console.log(chalk.cyan(' 文件上传完毕!\n '))
      }
    })
  })
})
