var router = require('express').Router();
var profilesCtrl = require('../controllers/profiles');

router.get('/users/profile', profilesCtrl.show)

module.exports = router;
