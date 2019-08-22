const crea = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer.'
    }
};

const actualiza = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer.'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiene la tarea.'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer.', crea)
    .command('actualizar', 'Actualiza el estado completado de una tarea.', actualiza)
    .command('borrar', 'Borra un elemento de las tareas por hacer.', crea)
    .help()
    .argv;

module.exports = {
    argv
};