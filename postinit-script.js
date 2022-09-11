#!/usr/bin/env node

const colors = require('colors');

console.log(colors.italic('Thank you for using our template!\n'))

console.log(`\nGo to project directory and run 
\'${colors.dim('yarn init-script')}\'
to ${colors.yellow('finalize')} customizing of your project.`)
