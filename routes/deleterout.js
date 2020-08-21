const express = require("express"),
router = express.Router(),
DeleteController = require('../controllers/deletecnt');

router.route('/:cities').delete(DeleteController.deleteFunc);

module.exports = router;