var router = require('express').Router();
var subsCtrl = require('../controllers/subs');

router.get('/', isLoggedIn, subsCtrl.index)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

  module.exports = router;
