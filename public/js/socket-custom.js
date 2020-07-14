var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// Emitir informacion
socket.emit('enviarMsg', {
    nombre: 'Daniel',
    apellido: 'Garcia',
    mensaje: 'Hola mundo'
}, function(response) {
    console.log('Respues del server', response);
});

// escuchar información
socket.on('enviarMsg', function(message) {
    console.log('Mensaje desde el servidor', message);
}, function(response) {
    console.log('Respues del server', response);
});