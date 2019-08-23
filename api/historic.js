const moment = require('moment')

module.exports = app => {
    const getHistoric = (req, res) => {
        app.db('historic')
            .where({ owner: req.user.id })
            .orderBy('moto')
            .then(historic => res.json(historic))
            .catch(err => res.status(400).json(err))
    }

    return { getHistoric }
}
