import striptags from "striptags";

export default function (html, allowedTags, tagReplacement) {
    return striptags(html, allowedTags, tagReplacement);
};