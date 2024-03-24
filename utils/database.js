const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_app' , 'root' , "Sumit@1997" , {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;