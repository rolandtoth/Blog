---json
{
    "title": "Animated hamburger icon mixin (Sass/Stylus/LESS)",
    "excerpt": "An easy-to-use animated hamburger icon to show a mobile menu (or off-canvas menu, etc).",
    "img": "animated-hamburger-icon-mixin-sass-stylus-less.png",
    "bgImg": "martin-adams-vBzJ0UFOA70-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/vBzJ0UFOA70",
    "date": "2017-08-19",
    "legacyURL": "https://blog.rolandtoth.hu/post/164359939427/animated-hamburger-icon-mixin-sassstylusless",
    "tags": [
        "css"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

I’ve put together this mixin because there wasn’t one available that suited my needs. Unlike others, it uses the “checkbox hack” (HTML checkbox + a stylized label) that eliminates the need of using additional JavaScript for the active (checked) state. 

It also allows placing the label (that is, the icon itself) anywhere in the DOM that makes it very flexible.

Compatible with IE11+ and Chrome/Firefox/Edge. I haven’t had a chance to check in Safari, please report if you find an issue.

## Parameters

- width: the width of the icon. default: 32px
- thickness: the thickness of the bars. default: 3px
- gap: the vertical space between the bars. Overall height is: thickness*3 + gap*2. default: 7px
- color: the color of the icons. default: #000 (black)
- radius: border-radius value to round edges. default: 0
- anim: seconds of animation duration (transition-duration) or timing function + duration (eg. “ease-out 0.3s”). default:0.25s
- labelselector: in case the label is not right after the checkbox, use this setting to tell the mixin where to find it. Eg. “~ div.content header nav label”. default: “+ label”
- padding: extra spacing around the icon. default: 0
- text: show text next to the icon, by default on the right. Values: “left” or false to disable. Requires an extra “span” tag. default: “right”

## Demo

The demo contains links to the Sass, Stylus and LESS versions:

{{ "https://codepen.io/rolandtoth/pen/LypvrV" | codepenEmbed("Sass animated hamburger icon mixin") | safe }}

## GitHub

[https://github.com/rolandtoth/hamburger-mixin](https://github.com/rolandtoth/hamburger-mixin)