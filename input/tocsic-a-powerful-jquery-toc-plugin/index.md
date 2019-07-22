---json
{
    "title": "TOCsic: a Powerful jQuery TOC Plugin",
    "excerpt": "TOCsic is a customizable table of contents plugin for jQuery, featuring go to top links, smooth scroll and developer-friendly class names.",
    "date": "2012-08-12",
    "img": "tocsic-a-powerful-jquery-toc-plugin.jpg",
    "bgImg": "andrew-pons-wbkYwKstquI-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/wbkYwKstquI",
    "legacyURL": "https://blog.rolandtoth.hu/post/33154951184/introducing-tocsic-a-powerful-jquery-toc-plugin",
    "tags": [
        "javascript",
        "jquery"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Coding TOCs by hand is not hard but when there are many items it can easily become a daunting task. First I thought there should be plenty of jQuery plugins out there to choose from but I haven't found the right one. I needed one with "go to top" links, which enable jumping back and forth between TOC and targets. Existing plugins offer only one-way interaction or require the TOC to be of fixed position.

I thought that was the right time to create my first jQuery plugin - and TOCsic was born.

## Features

- option to add TOC title with custom tag
- customizable before and/or after character for TOC items (e.g. arrows or hyphens)
- customizable attachTo parameter (defaults to "body")
- "go to top" links on each target, or
- one "go to top" link (meant to be used with fixed position)
- smooth scroll
- user-defined "go to top" link text and title
- option to make the fixed "go to top" link visible only if page is scrolled down
- scroll to top of the page or to position of TOC (the two can be different)
- optional level classes to make CSS styling easier

## Learn more

[Visit TOCsic](http://tocsic.rolandtoth.hu/)