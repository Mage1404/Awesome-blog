const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "admin",
    email: "admin@email.com",
    password: "admin",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
