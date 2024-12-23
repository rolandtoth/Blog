export default function (page, legacyURL) {
    var attr,
        value;

    if (legacyURL) {
        attr = "data-disqus-url";
        value = legacyURL;
    } else {
        attr = "data-disqus-identifier";
        value = page.url;
    }

    return `<span class="disqus-comment-count" ${attr}="${value}"><em class="dq-c">0</em> <em>comments</em></span>`;
};