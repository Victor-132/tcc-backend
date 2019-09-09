const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({ name: req.body.name, email: req.body.email, password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    const changeName = (req, res) => {
        app.db('users')
            .where({ id: req.user.id })
            .update({ name: req.body.name })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const changePassword = (req, res) => {
        obterHash(req.body.password, hash => {
            const newPassword = hash

            app.db('users')
                .where({ id: req.user.id })
                .update({ password: newPassword })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save, changeName, changePassword }
}