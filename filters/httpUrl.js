const cfg = require("../input/_data/cfg.json");

module.exports = function (path, encode = false) {
    if (encode) {
        path = encodeURIComponent(path);
    }

    return `${cfg.domain}${path}`;
};