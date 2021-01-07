const fetch = require('node-fetch')
const chalk = require('chalk')
const tinyurl = require('tinyurl-api')

console.log(chalk.greenBright('Getting you a link to a cute cat picture...'))

async function main() {
    const { file } = await fetch('https://aws.random.cat/meow')
        .then(response => response.json())
    const url = await tinyurl(file);
    console.log(chalk.blueBright(`Finished! Visit`), chalk.redBright(`${url}`), chalk.blueBright(`!`))
}

main()