---json
{
    "title": "Fake Disabled Submit Button State with CSS",
    "excerpt": "There’s often a need to set a submit button state to disabled to avoid double submit or to indicate that something’s happening. Mostly it’s done with JavaScript but in some simple cases I would prefer a more lightweight and easy-to-add solution. Here is a way to fake it with CSS.",
    "img": "fake-disabled-submit-button-state-with-css.jpg",
    "date": "2019-02-26",
    "bgImg": "mark-solarski-TkEPQPWr2sY-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/TkEPQPWr2sY",
    "legacyURL": "http://blog.rolandtoth.hu/post/183103674972/fake-disabled-submit-button-state-with-css",
    "tags": [
        "css"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

The base idea is to disable mouse interaction on a submit button with `pointer-events: none;` when it’s focused. It’s easy but there’s a catch: doing so will prevent the submit event to fire because in the moment of clicking the button gets "disabled”.

To overcome this I’m using CSS animation with a tiny delay. This way there’s enough time for the click event but not enough time for consecutive clicks.

```css
[data-temp-disable="1"]:focus {
    animation: 10s tempdisable 0.2s steps(1, end);
}

@keyframes tempdisable {
    from { opacity: 0.5; pointer-events: none; filter: saturate(0); }
    to { opacity: 1; pointer-events: all; }
}
```

To use this, add a `data-temp-disable="1"` attribute to the submit button in question. 0.2 seconds after clicking on it the CSS `pointer-events: none;` will kick in so you can’t submit it again.

I added a 10-second timeout to this fake disabled state to make sure it won’t be disabled forever.

I’ve made the button half opaque and fully desaturated to indicate the pressed state but you can be more creative. The animation is using "steps” to make the "enabled” state appear only at the end of the animation.

Remember that this lightweight solution is for simple cases, otherwise use JavaScript instead (for example when you need to set a submit button disabled without click event, eg. via form submit event).