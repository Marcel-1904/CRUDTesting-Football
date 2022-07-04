const controller = require("../controllers/football.controller");

module.exports = app => {
    app.get("/football/:name", controller.create);
}