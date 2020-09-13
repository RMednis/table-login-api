const controller = require("../controllers/user.controller");
const {verifyToken, isAdminOrModerator, isAdmin} = require("../middleware/auth.jwt");
const initUserRoutes = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Test if user is a mod
    app.get(
        "/api/test/mod",
        [verifyToken, isAdminOrModerator],
        controller.isModerator
    );

    // Test if user is an admin
    app.get(
        "/api/test/admin",
        [verifyToken, isAdmin],
        controller.isAdmin
    );

    // Get public table view
    app.post("/api/get/table", controller.getTable);

    // Update table
    app.post("/api/set/table",
        [verifyToken, isAdminOrModerator], // Only moderators and admins can verify table
        controller.setTable
    );
};
module.exports = {
    initUserRoutes: initUserRoutes
};