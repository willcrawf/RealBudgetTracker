const sub = require('../models/sub')

module.exports = {
    index
}

function index(req, res){
    sub.find({}, function(err, subs) {
        res.render('subs/index', {title: "Current Subscriptions:", subs})
    })
}

