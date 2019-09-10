const moment = require('moment')

module.exports = app => {
    const getStatus = async (req, res) => {

        const status = await app.db('motorcycles')
            .where({ owner: req.user.id, status: 't' })
            .first()

        if (status) {
            return res.send(true)
        } else {
            return res.send(false)
        }
    }

    const save = (req, res) => {

        req.body.owner = req.user.id

        app.db('motorcycles')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    const remove = (req, res) => {
        app.db('motorcycles')
            .where({ id: req.params.id, owner: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                } else {
                    const msg = `Não foi encontrada moto com id $(req.params.id).`
                    res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return { getStatus, save, remove }
}
