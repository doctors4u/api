
module.exports = {
  dialect: "mysql",
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 25060,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};




