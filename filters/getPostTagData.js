const postTags = require("../input/_data/postTags.json");

module.exports = function (key) {
    return postTags[key];
};