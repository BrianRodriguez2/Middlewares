const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/userLogs');
const adminMiddleware = require('../middlewares/adminUser');
const indexController = require('../controllers/indexController');

router.get('/',indexController.index);
router.get('/login', logMiddleware,indexController.login);
router.get('/admin',adminMiddleware,logMiddleware ,indexController.admin);


module.exports = router;