module.exports = function (application) {
    application.post('/', function (req, resp) {
        resp.render('index');
    });

    application.get('/', function (req, resp) {
        resp.render('index');
    });
};