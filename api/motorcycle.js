const moment = require('moment')

module.exports = app => {
    const getMotorcycles = (req, res) => {
        app.db('motorcycles')
            .where({ owner: req.user.id })
            .orderBy('id')
            .then(motorcycles => res.json(motorcycles))
            .catch(err => res.status(400).json(err))
    }

    const save = (req, res) => {
        if (!req.body.model.trim()) {
            return res.status(400).send('Modelo é um campo obrigatório!')
        }

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

    return { getMotorcycles, save, remove }
}