import cfg from "../input/_data/cfg.json" with { type: "json" };
import { sync } from "glob";

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