import slugify from "slugify";

export default function (input) {
    const options = {
        replacement: "-",
        remove: /[&,+()$~%.'":*?<>{}]/g,
        lower: true
    };

    return input ? slugify(input, options) : false;
}