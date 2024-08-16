const path = require("path");
const constants = {};
constants.DATA_DIR = path.resolve("public", "media");
constants.RAW_DIR = path.resolve(constants.DATA_DIR, "raw");
constants.DATASET_DIR = path.resolve(constants.DATA_DIR, "dataset");
constants.JSON_DIR = path.resolve(constants.DATASET_DIR, "json");
constants.IMG_DIR = path.resolve(constants.DATASET_DIR, "img");
constants.SAMPLES = path.resolve(constants.DATASET_DIR, "samples.json");
constants.FEATURES = path.resolve(constants.DATASET_DIR, "feature.json");
constants.SAMPLES_JS = path.resolve("public", "js", "samples.js");


module.exports = constants;
