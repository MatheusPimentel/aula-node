// importar as configurações do servidor
var app = require('./config/server');

// porta de escuta
var server = app.listen(8000, function () {
    console.log('servidor online')
});

var io = require('socket.io').listen(server);

app.set('io', io);

//criar a conexao com o websocket
io.on('connection', function (socket) {
    console.log('Usuário conectou');
    socket.on('disconnect', function () {
        console.log('Usuário desconectou')
    })
});