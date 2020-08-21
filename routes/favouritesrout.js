const express = require("express"),
router = express.Router(),
FavouritesController = require('../controllers/favouritescnt');

router.route('/').get(FavouritesController.getFavouritePage);

module.exports = router;
