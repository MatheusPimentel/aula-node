module.exports = function (application) {
    application.get('/chat', function (req, resp) {
        resp.render('chat');
    })
};