const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/registers.sqlite'
  })
 
module.exports = sequelize;