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
    });

    socket.on('msgParaServidor', function (data) {

        /* dialogo */
        socket.emit('msgParaCliente',
           {
               apelido: data.apelido,
               mensagem: data.mensagem
           });

        socket.broadcast.emit('msgParaCliente',
            {
                apelido: data.apelido,
                mensagem: data.mensagem
            });

        /* participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) === 0) {
            socket.emit('participantesParaClientes',
                {
                    apelido: data.apelido
                });

            socket.broadcast.emit('participantesParaClientes',
                {
                    apelido: data.apelido
                })
        }
    });
});