import postTags from "../input/_data/postTags.json" with { type: "json" };

export default function (key) {
    return postTags[key];
};