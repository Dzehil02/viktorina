const {Test, User} = require('../models/models');
const ApiError = require('../error/ApiError');
const { model } = require('../db');

class TestsController {
    
    async createTest(req, res) {
        const {title} = req.body
        const test = await Test.create({title})
        return res.json(test);
    }

    async getAllTests(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 3
        let offset = page * limit - limit

        let tests = await Test.findAndCountAll({limit, offset});
        return res.json(tests);
    }

    async getTestById(req, res) {
        const {id} = req.params;
        const test = await Test.findOne({
            where: {id},
            include: [{model: User, as: 'user'}]
        });
        if (!test) {
            return res.status(404).json('not found test with id: ' + id)
        }
        return res.json(test);
    }

    async putTest(req, res) {

    }

    async deleteTestById(req, res) {

    }

    async getCompletedTests(req, res) {

    }

    async getCompletedTestById(req, res) {

    }
}


module.exports = new TestsController()
