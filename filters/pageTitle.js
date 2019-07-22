const cfg = require("../input/_data/cfg.json");

module.exports = function (title) {
    let pageTitle = cfg.siteName;

    if (title) {
        pageTitle = `${title} - ${pageTitle}`;
    } else if (cfg.slogan) {
        pageTitle += ` - ${cfg.slogan}`;
    }

    return pageTitle;
}