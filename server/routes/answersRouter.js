const Router = require('express')
const router = new Router()
const answersController = require('../controllers/answersController')

router.post('/answer_id', answersController.createAnswerById)
router.get('/:test_id', answersController.getAnswersById)

module.exports = router;