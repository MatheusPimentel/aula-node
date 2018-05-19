// importar o framework express
var express = require('express');

// importar o consign
var consign = require('consign');

// importar o body-parser
var bodyParser = require('body-parser');

// importar o express-validator
var expressValidator = require('express-validator');

// iniciar o objeto do express
var app = express();

// setar as variageis 'view engine' e views do ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar o middleware express.static
app.use(express.static('./app/public'));

// configurar o middleware bodyParser
app.use(bodyParser.urlencoded({extended : true}));

// configurar o middleware expressValidator
app.use(expressValidator());

// efetua o autoload das rotas, models e dos controllers para o app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exportando o app
module.exports = app;