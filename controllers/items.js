const User = require('../models/user');
const newItem = require('../models/item');

module.exports = {
    new: newItemPage
}

function newItemPage(req, res){
    res.render('items/new', {title: 'New Item'})
}