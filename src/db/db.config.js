module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "user",
    PASSWORD: process.env.DB_PASS || "password",
    DB: process.env.DB_NAME || "SiteUsers",
    dialect: "mysql",
    pool: {
        max: 3,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};