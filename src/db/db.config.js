module.exports = {
    HOST: "localhost",
    USER: "",
    PASSWORD: "",
    DB: "SiteUsers",
    dialect: "mysql",
    pool: {
        max: 3,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};