const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const CompletedTest = sequelize.define('completed_test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    right: {type: DataTypes.INTEGER},
    wrong: {type: DataTypes.INTEGER},
})

const Test = sequelize.define('test', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.ENUM(['box', 'radio', 'input'])},
    order: {type: DataTypes.INTEGER}
})

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING},
    correct: {type: DataTypes.BOOLEAN},
})

const UserAnswers = sequelize.define('user_answers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING},
})

User.hasMany(CompletedTest)
CompletedTest.belongsTo(User)

User.hasMany(Test)
Test.belongsTo(User)

User.hasMany(UserAnswers)
UserAnswers.belongsTo(User)

Test.hasMany(CompletedTest)
CompletedTest.belongsTo(Test)

Test.hasMany(Question)
Question.belongsTo(Test)

Question.hasMany(Answer)
Answer.belongsTo(Question)

Answer.hasMany(UserAnswers)
UserAnswers.belongsTo(Answer)

module.exports = {
    User,
    CompletedTest,
    Test,
    Question,
    Answer,
    UserAnswers
}
