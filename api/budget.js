const moment = require('moment')

module.exports = app => {
    const getBudget = (req, res) => {
        app.db('budget')
            .where({ id_users: req.user.id })
            .orderBy('id')
            .then(budget => res.json(budget))
            .catch(err => res.status(400).json(err))
    }

    return { getBudget }
}