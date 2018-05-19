// importar as configurações do servidor
var app = require('./config/server');

// porta de escuta
app.listen(8000, function () {
    console.log('servidor online')
});