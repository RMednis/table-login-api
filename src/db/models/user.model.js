// USER DATABASE MODEL
module.exports = (sequelizer, Sequelize) => {
    return sequelizer.define("users", {
        email: {
            type: Sequelize.STRING,
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        salt: {
            type: Sequelize.STRING
        }
    });
};