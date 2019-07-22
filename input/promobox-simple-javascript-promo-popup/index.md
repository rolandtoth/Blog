---json
{
    "title": "promoBox: Simple JavaScript Promo Popup",
    "excerpt": "In search of a simple solution to show a promo image on your site? Give promoBox a try.",
    "img": "promobox.jpg",
    "bgImg": "markus-spiske-JO_CBLe4qA4-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/JO_CBLe4qA4",
    "date": "2014-04-13",
    "legacyURL": "https://blog.rolandtoth.hu/post/82572422490/promobox-simple-javascript-promo-popup",
    "tags": [
        "javascript"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

From time to time I have to add such functionality to sites, that is, show a promo image when the user visits the site. It seems simple and in fact it is, using some markup, a bit of CSS and JavaScript. Things get more complicated when you need to add some extra features: show the popup only in a number of days, define start/end dates, etc.

Years ago I created a simple JavaScript skeleton that I used in several projects. That served well for a quick bootstrap that I could modify according to the actual needs. Finally I decided to take it to the next level and make a general function that can be easily customized using parameters.

## Self-Contained

I purposely coded promoBox in vanilla JavaScript to make it light and more general. Currently it weighs 13 KBs (7 KB minified) so it is really tiny. Furthermore, it is entirely self-contained so there is no need to write markup or CSS - just add the function and set parameters, promoBox will do the rest.

## Styling

When I use third-party plugins it is usually a great challenge to style it according to my needs. That’s why I haven’t used inline styles but added a style block in the header tag instead. This way style rules can be simply overriden without the need of “!important” flags. What’s more there is a parameter “disableStyles” that completely disables styling so you can start with a blank sheet.

## Usage

First include promoBox.js to the header, then call promoBox with options:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    promoBox({
          imagePath: "bird.jpg",
          link: "https://rolandtoth.hu",
          target: "_blank"
     });
}, false);
```

That’s it. If you need custom styling then overwrite existing CSS rules.

## Options

There are 20+ options available for promoBox. See the [GitHub page](https://github.com/rolandtoth/promoBox) for the full list.

## Demo

{{ "https://codepen.io/rolandtoth/pen/Kkdln" | codepenEmbed("promoBox JavaScript Promo Popup Demo") | safe }}

## Download promoBox

Grab promoBox files form [GitHub](https://github.com/rolandtoth/promoBox).

As always, feel free to suggest a new feature or report a bug.

### Update 17/06/2014

Notable new features (v1.2):

- effects: fade in and fade out (using CSS3)
- interstitial with countdown timer
- delayed start
- start lightbox only when the main image is fully loaded

## Last but not least

There's also **[promoSlider](https://github.com/rolandtoth/PromoSlider)** which is mostly based on promoBox, but has advanced features as well (check the [demo](https://raw.githack.com/rolandtoth/PromoSlider/master/index.html))