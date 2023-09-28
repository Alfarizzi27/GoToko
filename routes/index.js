const express = require('express')
const router = express.Router()
const authenticate = require('../authenticationMiddleware.js');
const Controller =require('../controllers/controller.js')

router.get('/login', Controller.loginpagerenderer)
router.post('/login', authenticate,Controller.loginpagehandler)

router.get('/register', Controller.registerpagerenderer)
router.post('/register', Controller.registerpagehandler)

router.get('/userprofile', authenticate, Controller.userprofilerenderer)

router.get('/logout', authenticate, Controller.logout)









module.exports = router