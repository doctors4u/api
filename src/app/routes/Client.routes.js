const { Router } = require("express");
const routes = Router();

const ControllerUsers = require("../controllers/ControllerUsers");

routes.post("/storage", ControllerUsers.storage);
routes.get("/get/all", ControllerUsers.getAll);

module.exports = routes;
