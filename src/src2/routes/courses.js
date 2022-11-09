const express = require('express');
const router = express.Router();

const coursecontroller = require('../app/controllers/Coursecontroller');

router.get('/searchcontend' , coursecontroller.searchcontend );
//router.get('/comment' , coursecontroller.comment );
router.get('/search' , coursecontroller.search );
router.post('/store' , coursecontroller.store );
router.post('/storesearch' , coursecontroller.storesearch );
router.post('/rendercontend' , coursecontroller.rendercontend );
router.get('/:link' , coursecontroller.show );

module.exports = router ;