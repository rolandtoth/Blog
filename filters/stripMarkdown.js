const removeMd = require("remove-markdown");

module.exports = function (str) {
    return removeMd(str);
};