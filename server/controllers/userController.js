const ApiError = require('../error/ApiError')

class UserController {
    
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async auth(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Нет id пользователя'))
        }
        res.json(id)
    }

    async password(req, res) {

    }

    async refresh(req, res) {

    }

    async active(req, res) {

    }
}


module.exports = new UserController()