const sub = require('../models/sub')
const User = require('../models/user')
module.exports = {
    index
}

function index(req, res){
    if (User.budget) {
        return
    } else {
        res.render("budget/noBudget", {title: ""})
    }
    sub.find({}, function(err, subs) {
        res.render('subs/index', {title: "Current Subscriptions:", subs})
    })
}

