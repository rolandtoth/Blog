---json
{
    "title": "Batch optimize images for the web, locally (Windows)",
    "excerpt": "There are many great online image optimizers like [Kraken](https://kraken.io/), [JPEGmini](https://www.jpegmini.com/) but what if you need to optimize images offline? Using DropIt with commandline utilities is a handy alternative.",
    "img": "dropit-optimize-images.png",
    "bgImg": "jamison-mcandie-uf4oyaimWwg-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/uf4oyaimWwg",
    "date": "2015-07-26",
    "legacyURL": "https://blog.rolandtoth.hu/post/125069358787/batch-optimize-images-for-the-web-locally-win",
    "tags": [
        "optimization",
        "dropit",
        "software"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

If you’re on a Mac, you should try [ImageOptim](https://imageoptim.com/mac), and if on Linux, perhaps [Trimage](https://trimage.org/) will help you out. Unfortunately I haven’t found anything similar for Windows, only commandline utilities. While these are great (and most online services are using them too) they are just inconvenient to use. That’s why I put together a DropIt profile, so image optimization is really only a matter of drag-and-drop operation.

## Benefits and disadvantages

Using an offline tool instead of online service has these benefits:

- no need to upload, download and finally re-upload images to your site
- directory structure kept
- more control on settings
- in-place optimization (overwrite files)
- no file size limits, e.g. Kraken has 1 Mb / 16 Mb limits (free/pro)

Of course there are some disadvantages as well:

- slightly higher images sizes
- slower (depends on your PC resources)

## Tools

After trying some commandline tools I picked these:

- JPEG: [jpegtran](http://jpegclub.org/jpegtran/)
- PNG: [OptiPNG](http://optipng.sourceforge.net/)
- GIF: [gifsicle](http://www.lcdf.org/gifsicle/)

Note that I haven’t delve knee-deep into all the settings of their options, so perhaps there is room left for improvements. I was able to get results similar to Kraken’s and Google Page Speed didn’t complain about optimized images, which was just perfect to my needs.

## Get it

To read the full procedure and download the DropIt profile, read my full post on the DropIt blog:

[https://dropitblog.wordpress.com/2015/07/15/optimize-images-for-web/](https://dropitblog.wordpress.com/2015/07/15/optimize-images-for-web/)