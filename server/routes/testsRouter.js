const Router = require('express')
const router = new Router()
const testsController = require('../controllers/testsController')

router.post('/', testsController.createTest)
router.get('/', testsController.getAllTests)
router.get('/:id', testsController.getTestById)
router.put('/:id', testsController.putTest)
router.delete('/:id', testsController.deleteTestById)
router.get('/completed', testsController.getCompletedTests)
router.get('/completed/:id', testsController.getCompletedTestById)

module.exports = router;