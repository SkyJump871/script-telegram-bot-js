const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const package = require('./package.json')
const figlet = require('figlet')
const { color } = require('./function')
const { loadAllDirFiles } = require('./function/loader')

// Headers
console.log(color(figlet.textSync('RF Bot', 'Banner3-D'), 'cyan'))
// Info Bot
console.log(color('Author:', 'yellow'), color(package.author))
console.log(color('Version:', 'yellow'), color(package.version))
console.log(color('Commands:', 'yellow'), color(loadAllDirFiles('./commands').length))
console.log(color('Function:', 'yellow'), color(loadAllDirFiles('./function').length))
console.log(color('Database:', 'yellow'), color(loadAllDirFiles('./database').length))
console.log(color('Packages:', 'yellow'), color(loadAllDirFiles('./node_modules').length))

// Continue to handler.js
let isRun = false;

function starts(files) {
    if (isRun) return
    isRun = true
    let args = [path.join(__dirname, files), ...process.argv.slice(2)]
    let sp = spawn(process.argv[0], args, {
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
    })
    sp.on('exit', (code) => {
        isRun = false
        console.error('Exited with code:', code)
        if (code === 0) return
        fs.watchFile(args[0], () => {
            fs.unwatchFile(args[0])
            starts(files)
        })
    })
}

starts('handler.js')