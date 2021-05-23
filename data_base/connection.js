const Sequelize = require("sequelize");
const db_config = require("/configuration/db_configuration.json").development;

const sequelize = new Sequelize(db_config.database, db_config.username, db_config.password, {
    host: db_config.host,
    dialect: db_config.dialect,
    operatorsAliases: db_config.operatorsAliases
});

global.sequelize = sequelize;
require("./connection_test")();
module.exports = sequelize;