#!/usr/bin/env node
const clearConsole = require('clear-any-console')

// clears any console OS agnostic
clearConsole()
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function printResume () {
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
