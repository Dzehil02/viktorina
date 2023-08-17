const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/password', userController.password)
router.get('/auth', userController.auth)
router.get('/refresh', userController.refresh)
router.get('/activate/:link', userController.active)

module.exports = router;