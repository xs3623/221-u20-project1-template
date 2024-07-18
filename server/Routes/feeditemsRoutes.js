const express = require('express');
const router = express.Router( );

 let feeditemController = require('../controller/feedController');

router.route('/')
    .get(feeditemController.getfeeditem)
    .post(feeditemController.savefeeditem);

router.route('/:feeditemId')
    .get(feeditemController.getfeeditem)
    .delete(feeditemController.deletefeeditem)
    .patch(feeditemController.updatefeeditem)
    .put(feeditemController.updatefeeditem)


module.exports = router;