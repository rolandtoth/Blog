import { createRequire } from "module";

const require = createRequire(import.meta.url);
const postTags = require("../input/_data/postTags.json");

export default function (key) {
    return postTags[key];
};