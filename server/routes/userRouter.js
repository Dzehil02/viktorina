const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/password', userController.password)
router.get('/', checkRoleMiddleware('ADMIN'), userController.getUsers)
router.get('/auth', authMiddleware, userController.auth)
router.get('/refresh', userController.refresh)
router.get('/activate/:link', userController.active)

module.exports = router;