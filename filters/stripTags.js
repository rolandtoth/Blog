const striptags = require("striptags");

module.exports = function (html, allowedTags, tagReplacement) {
    return striptags(html, allowedTags, tagReplacement);
};