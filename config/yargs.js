const argv  = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicación'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Es el multiplicador máximo'
                    })
                    .check( (argv, options) => {
                        if( isNaN( argv.b ) ){
                            throw 'La base tiene que ser un número'
                        }
                        return true
                    })
                    .check((argv, options) => {
                        if ( isNaN( argv.h )) {
                            throw 'El hasta tiene que ser un número'
                        }
                        return true
                    })
                    .argv

module.exports = argv
