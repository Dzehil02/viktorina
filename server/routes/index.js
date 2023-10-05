const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const testsRouter = require('./testsRouter')
const answersRouter = require('./answersRouter')

router.use('/user', userRouter)
router.use('/tests', testsRouter)
router.use('/answers', answersRouter)

module.exports = router;