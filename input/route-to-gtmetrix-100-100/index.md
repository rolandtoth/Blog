---json
{
    "title": "Route to GTmetrix 100/100",
    "excerpt": "On a few static sites I got pretty nice GTmetrix speed scores, and I looked into how to push them up to 100. Not just the main score indicators (PageSpeed and YSlow) but all of their sub-scores.",
    "date": "2019-07-23",
    "img": "route-to-gtmetrix-100.png",
    "bgImg": "patrick-hendry-qaxSjLbZPSA-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/qaxSjLbZPSA",
    "tags": [
        "eleventy",
        "optimization"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

I always try to deliver websites that runs fast and does not contain extra bloat. That was one of the reasons I turned to static generators ([Eleventy](https://www.11ty.io/)). By going static means no server-side process is performed, therefore it's fast by default. You can achieve the same effect with caching, even though not entirely.

## Going green

Here are two sites that are all green:

- [https://gtmetrix.com/reports/rolandtoth.hu/nmXy9tWC](https://gtmetrix.com/reports/rolandtoth.hu/nmXy9tWC)
- [https://gtmetrix.com/reports/neptunbrigad.hu/nter4Qq9](https://gtmetrix.com/reports/neptunbrigad.hu/nter4Qq9)

## Default optimizations

Of course I went through the default optimization steps before even checking the score. These are part of my stack nowadays:

- **CSS minification**: I use SCSS (just because I'm lazy to modify my stack to use Stylus instead) with cssnano and autoprefixer
- **JavaScript minification**: I usually need only one main JS file which is minified with UglifyJS. If some subpages require extra JS files, I load them with my home-brew asset loader (which can load CSS as well)
- **image minification**: most of the time I use local commandline tools (with DropIt, see here on the blog), or just use an online service (eg. Kraken)
- **HTML minify**: I use the html-minifier npm package
- **SSL:** without too much ado, this is a must nowadays
- **.htaccess**: I just mention it here because it has a huge impact on Apache servers (enabling gzip, cache-control, etc). But actually there's no need when the site is hosted by Netlify, I just need to set an Expires and Cache-Control headers

After all these I usually got about 95 (PageSpeed/YSlow), so there are some extra steps to take.

## Issue: insufficient HTML minification

Most of the time the HTML minification was not as good as GTmetrix would require. The fact is that it usually is, but their minification tool is buggy as it suggests such optimization for ```<a href="/">```:

```html
<a href=/>
```

If it's not clear at first, the href value in this case is empty, since the last ```/>``` part is considered as a closing HTML tag. As a result, it not only suggests a bad thing but even spits out an invalid markup. So what to do in this case? I could live with that (since the tool apparently has issues) but you can add a class or other attribute to the tag so the href attribute won't be the last one on the tag, eg. ```<a href=/ class="text-link">```.

## Issue: insufficient image optimizations

This happens all the time, but thankfully GTMetrix gives you the image properly optimized so you can download and replace. It works for small pages, but when images come from eg. a CMS this is not a viable method. For me it was fine since I rarely replace images on these static sites.

## Issue: no CDN network used

I use Eleventy with Netlify, so practically these sites are hosted by their servers and thus assets come from their CDN. This was the biggest YSlow issue I had beforehands but this way it was solved.

## Issue: render-blocking CSS

I never liked the idea of the extra roundtrip of critical CSS (I'm also kind of lazy-loaded :)) and unfortunately there's no official solution to this problem. I usually have very small CSS (about 30KB minified), so if it's an issue, I just put all of it in the head. I know it's not pretty and causes extra traffic on each page load, but since it's very tiny (like a size of a smaller image), I won't have sleepless nights because of it.

## Issue: 3rd party assets

Services like Disqus, Analytics, some embed scripts, etc are not always come with a proper cache validator or even minified. All you can do is... basically nothing. If you need to use them, try to use only where it's really needed, but say bye-bye to 100/100 :)

## Conclusion: just for fun

GTmetrix (and PageSpeed insights) 100/100 is not impossible, but requires simple websites and some adjustments. Even though I managed to achieve it, I don't recommend to spend hours tweaking it. The more you try to get a perfect score the more complicated your stuff will be (code, development environment, etc) which will cause maintainability issues on the long run. If there are some low hanging fruits that you can easily fix, do it, but don't over-optimize.