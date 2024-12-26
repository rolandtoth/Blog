---json
{
    "title": "Portfolio Update 2024",
    "excerpt": "The time has come again to update my portfolio site, but now only for the technical stuff",
    "img": "portfolio-update-2024.png",
    "bgImg": "christmas-matrix.webp",
    "bgImgUrl": "https://unsplash.com/photos/white-stars-cutout-on-black-surface-with-red-string-h2O_jHvjfIM",
    "date": "2024-12-26",
    "tags": [
        "css",
        "eleventy",
        "portfolio"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

## Christmas again, time to do some chores

Updating my Eleventy-based sites was long due, especially that Netlify has sent me emails that Node.js 8 will not be supported in the future. One such site was my Portfolio which code was last touched like 5 years ago, so I knew I'm about to have some tough times with NPM dependencies and who knows what.

## Updating Eleventy

The site was built with Eleventy version 0.7 but the current version was 3.0. That's a huge leap so I was prepared for the worst. To my surprise it was fairly easy to update, only 2 minor issues emerged which where easy to solve.

Eleventy is using JSON files to feed data to templates, which I also used for some filters and stuff, and apparently importing them as JSON broke Eleventy's serve mode. In GitHub comments I found that this is no longer the case with the latest Node.js, but since I'm still on an earlier version, I needed to load JSON files with `createRequire` to solve this. Other than that, the update went smoothly.

## CommonJS vs ESM

While at it, using `require` seemed so old-school that I started to turn everything to JS modules, especially that Eleventy examples are also using that. This went also easily, mostly because of VSCode's automatic conversion.

## Refactor CSS

Back then I've put together the development environment that needed two scripts to run: Eleventy serve + a watch script to build CSS from SCSS when it's modified. This was a bit of a problem, because I had to save a template file after changing CSS - not sure how I could live with that in the past.

Also node-sass was deprecated long ago, so updating it to something actual was also due.

However, with the latest CSS features like variables, nesting, etc I concluded that I could probably just get rid of SCSS entirely. But there was a problem: I had mixins, variables, grids and even icons tightly coupled with SCSS, so it looked like a bigger change.

Actually I'm using Tailwind in other projects and I really missed it from here, but I was too lazy to make such a big refactor.

First I replaced SCSS variables with CSS variables, then started to look for another icon alternative.

## Icons

I've used Icono back then, which I could not find today on the internet (ok, I admin that I did not invest too much time in finding it).

After some research I found this icons site, which was just what the doctor ordered:

[Icônes](https://icones.js.org/)

I could search for icons and copy their data-URLs, and that was all there was to it. I could delete the whole icono SCSS directory - what a relief!

## The result

The result is... the same as before, UI-wise. But under the hood it's much simpler and maintainable, not to mention that Netlify won't fail at building the static site because of unsupported Node runtime. Also `serve` mode became instant, the site refreshes within 1 second. Eleventy is still amazing!

There's still a few things to do, like updating to latest Node, but I guess this will be done around next Christmas or so. And who knows, maybe rewriting the site entirely with another framework. But for the time being, Eleventy does a great job.
