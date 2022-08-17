'use strict'
const {config} = require("dotenv");
config();
module.exports = {
    port : process.env.port || 4000,
};