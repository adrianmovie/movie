const Sequelize = require("sequelize");

module.exports = sequelize.define("movies", {
    id: {
        type: Sequelize.INTEGER(12),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    released: {
        type: Sequelize.DATE,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    director: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
});