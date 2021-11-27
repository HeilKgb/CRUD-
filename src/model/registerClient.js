const Sequelize = require('sequelize');
const database = require('../database/db');

const Client = database.define('Client', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
  cnpj:{
  type: Sequelize.STRING,
  allowNull: false,
  validate:{
    is:/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/
  }
  },
  loan_amount:{
  type: Sequelize.DOUBLE,
  allowNull: false
  },
  revenues:{
  type: Sequelize.DOUBLE,
  allowNull: false
  },
  company_address:{
  type: Sequelize.STRING,
  allowNull: false
  },
  requester_name:{
      type: Sequelize.STRING,
      allowNull: false
    },
  requester_cpf:{
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
    is:/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  },
  unique: true
  },
  requester_phone:{
  type: Sequelize.NUMBER,
  allowNull: false
  },
  requester_email:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        isEmail: true,
      }
  },
})

module.exports = Client;