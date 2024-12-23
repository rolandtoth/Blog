import cfg from "../input/_data/cfg.json" with { type: "json" };

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