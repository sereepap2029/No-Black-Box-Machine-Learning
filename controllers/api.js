const path = require("path");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const axios = require("axios");
const m_stringlib = require("../models/m_stringlib.js");
const constants = require("../models/constants.js");
const utils = require("../models/utils.js");
const fs = require("fs");
const { generateKey } = require("crypto");
const draw = require("../public/js/draw.js");
const { createCanvas } = require("canvas");

var exp = {};
exp.saveData = (req, res) => {
  if (req.body.student) {
    let rawData = JSON.stringify(req.body);
    let savePath = path.resolve("public", "media", "raw", `${req.body.session}.json`);
    fs.writeFile(savePath, rawData, (err) => {
      if (err) throw err;
      console.log("data has been saved to " + savePath);
    });
    return res.status(200).json({ status: "success", msg: "" });
  }
  return res.status(200).json({ status: "fail", msg: "not insert" });
};

exp.dataGen = (req, res) => {
  const filenames = fs.readdirSync(constants.RAW_DIR);
  let samples = [];
  let id = 1;
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext("2d");
  filenames.forEach((fn) => {
    let content = fs.readFileSync(constants.RAW_DIR + "/" + fn);
    let { session, student, drawings } = JSON.parse(content);
    for (let label in drawings) {
      samples.push({
        id,
        label,
        student_name: student,
        student_id: session,
      });
      const paths = drawings[label];
      fs.writeFileSync(constants.JSON_DIR + "/" + id + ".json", JSON.stringify(paths));
      generateImageFile({ outFile: constants.IMG_DIR + "/" + id + ".png", paths, canvas, ctx });
      utils.printProgress(id, filenames.length * 8);
      id++;
    }
  });
  fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));
  fs.writeFileSync(constants.SAMPLES_JS, "const sample=" + JSON.stringify(samples));
  return res.status(200).json({ status: "success", msg: "" });
};

function generateImageFile({ outFile, paths, ctx, canvas } = {}) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw.paths(ctx, paths);
  let buffer = canvas.toBuffer("image/png");
  console.log("create IMG " + outFile);
  fs.writeFileSync(outFile, buffer);
}

module.exports = exp;
