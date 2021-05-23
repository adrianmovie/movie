module.exports = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connect to database.');
    } catch (error) {
        console.log('Error while starting connection to database:', error);
    }
}