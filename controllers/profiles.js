const User = require('../models/user');
const Item = require('../models/item');

module.exports = {
    show
    // index
}

function show(req, res){
    res.render('users/profile', {title: "Profile", User})
}