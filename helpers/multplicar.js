const colors = require('colors/safe')
const fs = require('fs')
const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {

    try {

    
        let salida = ''
        let consola = ''
    
        for (let i = 1; i <= hasta; i++){
            consola += `${base} ${colors.magenta('x')} ${i} ${colors.cyan('=')}  ${base * i}\n`;

            salida += `${base} x ${i} = ${base * i}\n`
        }
    

        if (listar) {
            console.log('===================');
            console.log(colors.bgBrightMagenta.bold('  Tabla del:', base));
            console.log('===================');
            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
    
        return `tabla-${ base }.txt`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}