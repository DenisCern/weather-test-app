const express = require("express"),
router = express.Router(),
LogInController = require('../controllers/logincnt');

router.route('/').get(LogInController.getLogInPage);
router.route('/').post(LogInController.checkUser);

module.exports = router;