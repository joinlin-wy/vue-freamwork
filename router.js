exports.start = function(app) {
    app.get('/',function (req, res) {
        res.redirect('dist')
    })
}