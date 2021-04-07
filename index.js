#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJSON = require('./package.json')

welcome({
  title: pkgJSON.name,
  tagLine: 'Get to know Helio',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: '#fadc00',
  color: '#000000',
  bold: true,
  clear: true,
})

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function printResume () {
  await sleep(300)
  console.log('Welcome to my resume')
  await sleep(300)
  console.log('Helio Alves')
  await sleep(300)
  console.log('Role: Software Developer')
  await sleep(300)
  console.log('bio')
  await sleep(300)
  console.log(`
Social:
🐤 Twitter: https://twitter.com/helioalves
📖 Github:  https://github.com/alveshelio
📝 Blog:    https://helioalves.com 
  `)
}

printResume()
