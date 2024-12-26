import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cfg = require("../input/_data/cfg.json");

export default function (title) {
    const { siteName, slogan } = cfg;
    let pageTitle = siteName;

    if (title) {
        pageTitle = `${title} - ${pageTitle}`;
    } else if (slogan) {
        pageTitle += ` - ${slogan}`;
    }

    return pageTitle;
}