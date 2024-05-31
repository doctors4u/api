const sequelize = require("sequelize");

/* USERS */
const Users = require("../app/models/Users")

/* USERS PANEL */
const UsersPanel = require("../app/models/UsersPanel")

/* CARTS */
const Carts = require("../app/models/Carts")

/* PLANS */
const Plans = require("../app/models/Plans")


/* SERVICES */

const Services = require("../app/models/Services")


/*  Connection Database  */
const connectionDatabase = require("../config/database");

const models = [
  UsersPanel,
  Users,
  Carts,
  Plans,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new sequelize(connectionDatabase);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
