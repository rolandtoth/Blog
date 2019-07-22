---json
{
    "title": "Tip: Use Eleventy to generate markup-heavy HTMLs",
    "excerpt": "You can reduce the time needed for creating large HTML files a lot by using Eleventy with a JSON data source.",
    "img": "tip-use-eleventy-to-generate-markup-heavy-htmls.jpg",
    "date": "2018-11-19",
    "bgImg": "pat-krupa-vW-rB_wSoSg-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/vW-rB_wSoSg",
    "legacyURL": "http://blog.rolandtoth.hu/post/180272264422/tip-use-eleventy-for-generating-markup-heavy",
    "tags": [
        "html",
        "eleventy"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

If your task is to create an HTML file that will be very large and contain repeating items (blocks where only the content changes, eg. sliders, accordions, menus, etc), look no further than [Eleventy](https://www.11ty.io/docs/getting-started/). Just set up templates and feed them with data as needed, just like in CMSes.

## Is it worth?

It takes some time to set up but it’s worth the trouble, provided that the HTML you need to create is large enough. But once it’s done, modification is a piece of cake.

Consider the time you would need to add a new slide manually in a large HTML file:

1. Locate the slider in the file
1. Duplicate an existing slide
1. Replace content everywhere

I’m sure you can see how many potential errors are in the process above. Now consider you would like to radically change the slider markup and you have a dozen of slides. How easier would it be to change the markup at one place only?

This is where a static site generator can help a lot. I recommend using Eleventy because it’s very easy to set up and use so it adds very little overhead to such tasks.