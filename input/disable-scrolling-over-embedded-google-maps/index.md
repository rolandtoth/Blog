---json
{
    "title": "Disable scrolling over embedded Google maps",
    "excerpt": "If you have a full-width embedded Google map you are probably familar with the issue that the page can’t be scrolled because the iframe steals your mouse. There’s an “overlay” workaround floating around, here’s a simplifed verson of it.",
    "img": "disable-scrolling-over-embedded-google-maps.jpg",
    "bgImg": "nils-nedel-ONpGBpns3cs-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/ONpGBpns3cs",
    "date": "2017-02-24",
    "legacyURL": "http://blog.rolandtoth.hu/post/157649194832/disable-scrolling-over-embedded-google-maps",
    "tags": [
        "css",
        "html",
        "javascript"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

## Method 1

Unlike method 2 below this version disables scroll after moving the mouse outside the map area. To achieve this I used inline JavaScript events and inline style on the iframe but of course you can add all these to external files too (recommended, see below).

The idea is to disable mouse interaction on the iframe using pointer-events, and use onclick and onmouseleave events on the wrapper div to enable/disable scrolling.

```html
<div id="map" onclick="this.querySelector('iframe').removeAttribute('style')" onmouseleave="this.querySelector('iframe').style.pointerEvents='none'">
  <iframe src="..." style="pointer-events: none"></iframe>
</div>
```

As I wrote above this is not nice so here is a more universal JavaScript snippet that you can drop-in. Just modify the selector you pass in, here I used ‘.map-overlay’:

```javascript
(function(selector) {
    var mapsWithOverlay = document.querySelectorAll(selector);

    if (!mapsWithOverlay.length) return;

    for (var i = 0, len = mapsWithOverlay.length; i < len; i++) {
        var map = mapsWithOverlay[i];

        map.addEventListener('click', function () {
            this.querySelector('iframe').removeAttribute('style');
        });

        map.addEventListener('mouseleave', function () {
            this.querySelector('iframe').style.pointerEvents = 'none';
        });

        map.querySelector('iframe').style.pointerEvents = 'none';
    }
})('.map-overlay');
```

You can call it with multiple elements and there’s no need to add anything else to the wrapper div and needs no CSS.

## Method 2

_mouse interaction isn’t disabled on mouseleave_

The “overlay” workaround (eg. [here](https://stackoverflow.com/questions/21992498/disable-mouse-scroll-wheel-zoom-on-embedded-google-maps)) needs an additional invisible “div” element to be added to the markup, positioned above the map, blocking scroll access to the map. When you click on this overlay then it gets a “pointer-events: none” inline style so one can start zooming the map below it.

This works fine but I wondered if there’s an easier setup for this (not really fan of empty tags). Fortunately with a pseudo element and a bit of CSS trickery it’s possible.

### The markup

```html
<div id="map" onclick="this.removeAttribute('onclick')">
    <iframe src="..."></iframe>
</div>
```

As you can see there’s only an “onclick” event on a wrapper div, nothing else. The trick is to remove the onclick attribute on click, and use the “[onclick]” as a selector in CSS.

### The CSS

```css
#map {
  position: relative;
}

#map[onclick]:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

That’s all. Still a workaround, but somewhat nicer.