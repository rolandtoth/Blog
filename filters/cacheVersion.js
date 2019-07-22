const cfgDynamic = require("../input/_data/cfgDynamic.js");

module.exports = (url) => `${url}?v=${cfgDynamic().version}`;