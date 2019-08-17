module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)

    app.route('/motorcycle')
        .all(app.config.passport.authenticate())
        .get(app.api.motorcycle.getMotorcycles)
        .post(app.api.motorcycle.save)

    app.route('/motorcycle/:id')
        .all(app.config.passport.authenticate())
        .delete(app.api.motorcycle.remove)
}