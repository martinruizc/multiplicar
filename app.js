let colors = require('colors/safe')
const { crearArchivo } = require('./helpers/multplicar')
const argv = require('./config/yargs')

console.clear()


// const [ ,, arg3 = 'base=5'] = process.argv
// const [ , base = 5 ] = arg3.split('=')








crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.bgBrightYellow.italic(nombreArchivo, 'creado')))
    .catch(err => console.log(err))