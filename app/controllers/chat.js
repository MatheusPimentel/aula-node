module.exports.iniciaChat = function (application, req, resp) {

    var dadosForm = req.body;
    console.log(dadosForm);

    req.assert('apelido', 'Nome ou apelido é obrigatório!').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve ter entre 3 e 15 caracteres!').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        resp.render('index', {validacao : erros});
        return;
    }

    resp.render('chat');
};