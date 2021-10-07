const fs = require('fs');
const archivo = require('./tareas.json')

let archivoTareas = {
    archivo: archivo,
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (arrayTareas) {
        arrayTareasJSON = JSON.stringify(arrayTareas, null, 4)
        fs.writeFileSync('./tareas.json', arrayTareasJSON)
    },
    guardarTarea: function (objTarea) {
        let tareasActuales = this.leer(this.archivo);
        tareasActuales.push(objTarea);
        this.escribirJSON(tareasActuales);
    },
    leerPorEstado: function (estado) {
        return this.archivo.filter(item => item.estado == estado)
    },
    traerTarea: function(){
        this.archivo.forEach(item => console.log(item));
    },
}



module.exports = archivoTareas;