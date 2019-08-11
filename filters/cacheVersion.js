const cfgDynamic = require("../input/_data/cfgDynamic");

module.exports = (url) => `${url}?v=${cfgDynamic().version}`;