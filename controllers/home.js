const path = require("path");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const axios = require("axios");
const m_stringlib = require("../models/m_stringlib.js");
const constants = require("../models/constants.js");


var exp = {};
exp.home = (req, res) => {
  res.render(path.resolve("views", "home"), { name: "Tobi" });
};

exp.process = (req, res) => {
  res.render(path.resolve("views", "process"), { name: "Tobi" });
};

exp.viewer = (req, res) => {
  res.render(path.resolve("views", "viewer"), { name: "Tobi" });
};

module.exports = exp;
