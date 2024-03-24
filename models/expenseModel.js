const Sequelize = require('sequelize');
const sequelize = require("../utils/database");

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    category: Sequelize.STRING,
    description: Sequelize.STRING,
    amount: Sequelize.INTEGER
})

module.exports = Expense;