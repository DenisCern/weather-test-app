const express = require("express"),
router = express.Router(),
RegistrationController = require('../controllers/registrationcnt');

router.route('/').get(RegistrationController.getUser);
router.route('/').post(RegistrationController.postUser);

module.exports = router;
