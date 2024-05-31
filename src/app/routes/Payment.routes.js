const { Router } = require("express");
const routes = Router();
const auth = require("../middlewares/auth")
const ControllerPayment = require("../controllers/ControllerPayment");

routes.post("/storage",auth,ControllerPayment.storage);
routes.post("/get", ControllerPayment.get);


module.exports = routes;
