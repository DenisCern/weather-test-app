const express = require("express"),
router = express.Router(),
HomeController = require('../controllers/homecnt');

router.route('/').get(HomeController.getHomePage);

module.exports = router;