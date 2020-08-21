const express = require("express"),
router = express.Router(),
LogOutController = require('../controllers/logoutcnt');

router.route('/').get(LogOutController.getLogOut);

module.exports = router;