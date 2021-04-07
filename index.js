#!/usr/bin/env node

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function printResume () {

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
