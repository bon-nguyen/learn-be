const db = require('../db')
const shortid = require('shortid')

module.exports.create = function (req, res, next) {
    res.render('transfer/create')
}

module.exports.postCreate = function (req, res, next) {
    const payload = {
        id: shortid.generate(),
        amount: req.body.amount ? parseInt(req.body.amount) : 0,
        userId: req.body.userId ?? ''
    }
    db.get('transfers').push(payload).write()
    res.redirect('/transfer')
}