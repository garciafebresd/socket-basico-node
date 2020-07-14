const { io } = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMsg', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchando el cliente
    client.on('enviarMsg', (message, callback) => {

        console.log('Enviado desde el cliente', message);

        // enviar mensaje a todos los usuarios
        client.broadcast.emit('enviarMsg', message);

        // if (message.nombre) {
        //     callback({
        //         response: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         response: 'Todo salio MAL!!!!!!'
        //     });
        // }
    });

});