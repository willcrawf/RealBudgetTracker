const Profile = require('../models/profile');
const User = require('../models/user');

module.exports = {
    index
}

function index(req, res){
    User.find({}, function(err, items){
        res.render('topCategories', {title: "Top Categories", items})
    })
}