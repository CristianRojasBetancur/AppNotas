let archivoTareas = require('./tareas');

let lectura = {
    arg2: process.argv[2],
    arg3: process.argv[3],
}


switch (lectura.arg2) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        tareas.forEach(function (currentValue, index) {
            console.log(index + '. ' + currentValue.titulo + ' - ' + currentValue.estado);
        })
        console.log()
        break;
    case 'crear':

        let nuevaTarea = {
            titulo: lectura.arg3,
            estado: 'pendiente',
        }
        archivoTareas.guardarTarea(nuevaTarea);
        console.log('Tarea agregada exitosamente');
        break;
    case 'filtrar':
        archivoTareas.leerPorEstado(lectura.arg3);
        break;
    case undefined:
        console.log('Debes pasarme una acción');
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        break;
}
