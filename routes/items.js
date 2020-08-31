var router = require('express').Router();
var itemCtrl = require('../controllers/items');
const Profile = require('../models/profile');


router.get('/items/new', isLoggedIn, itemCtrl.new)
router.post('/items/', isLoggedIn, itemCtrl.create)

function isLoggedIn(req, res, next) {
hasBudget()
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }


function hasBudget(req, res, next){
  Profile.findOne({user: req.user._id}, function(err, profile){
    if (!profile) {
      res.redirect('/profiles')
    }
})
}
  module.exports = router;
