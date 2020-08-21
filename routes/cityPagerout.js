const express = require("express"),
router = express.Router(),
CityPageController = require('../controllers/cityPagecnt');

router.route('/:cities').post(CityPageController.postCity);
router.route('/:cities').get(CityPageController.postCity);

module.exports = router;
