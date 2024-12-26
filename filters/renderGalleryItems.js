import { sync } from "glob";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cfg = require("../input/_data/cfg.json");

export default function (dirname) {
    const { gallery } = cfg;
    const thumbs = sync(`assets/images/gallery/${dirname}/*-thumb.*`),
        markup = "";

    if (thumbs) {
        thumbs.forEach(thumb => {
            let largeImage = thumb.replace('-thumb.', '.');
            markup += `<a href="/${largeImage}" target="_blank"><img src="/${thumb}" width="${gallery.thumb.width}" height="${gallery.thumb.height}" alt=""/></a>`;
        });
    }

    return markup;
};