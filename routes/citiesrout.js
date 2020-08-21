const express = require("express"),
router = express.Router(),
CitiesController = require('../controllers/citiescnt');

router.route('/').post(CitiesController.postCity);
router.route('/').get(CitiesController.getCity);

module.exports = router;
