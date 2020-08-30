var router = require('express').Router();
var newItemCtrl = require('../controllers/items');


router.get('/new', isLoggedIn, newItemCtrl.new)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router;
