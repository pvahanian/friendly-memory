const { Sequelize } = require("sequelize")
module.exports = new Sequelize("codegig", "postgres", "1245eazxcvg", {
  host: "localhost",
  dialect: "postgres",
})
