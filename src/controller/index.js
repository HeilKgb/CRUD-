const { request } = require('express');

const registerClient = require('./registerClient');

module.exports = {
  clients: registerClient,
};