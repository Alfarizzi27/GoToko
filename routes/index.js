const express = require('express')
const router = express.Router()

const Controller =require('../controllers/controller.js')

// router.get('/', Controller.getIndex)
router.get('/login', Controller.loginpagerenderer)
router.post('/login', Controller.loginpagehandler)

router.get('/register', Controller.registerpagerenderer)
router.post('/register', Controller.registerpagehandler)


router.get('/userprofile', Controller.userprofilerenderer)







module.exports = router