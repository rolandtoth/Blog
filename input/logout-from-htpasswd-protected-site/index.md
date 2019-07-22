---json
{
    "title": "Logout From .htpasswd Protected Site",
    "excerpt": "Using .htaccess with .htpasswd is an easy way to add simple protection to a site. But once logged in there is no easy way to log out.",
    "date": "2014-08-02",
    "img": "logout-from-htpasswd-protected-site.jpg",
    "bgImg": "micah-williams-lmFJOx7hPc4-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/lmFJOx7hPc4",
    "legacyURL": "https://blog.rolandtoth.hu/post/81517440842/bookmarklet-log-out-from-htpasswd-protected-site",
    "tags": [
        "server"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

One way to force logout is closing the browser (with all its windows) but that's way too radical.

Fortunately visiting the a link like this should also work in most cases.

```plaintext
http://logout@example.com/
```

You can type it every time to the URL bar, or create a bookmark with this in the URL field:

```javascript
javascript:document.location=document.URL.replace("://","://logout@");
```

What it does is simply replace the ```://``` with ```://logout@``` in the document url, so it works with both http and https sites.

Now you just need to click on the bookmark and you'll be logged out.

_Note: unfortunately Chrome doesn't allow creating a bookmarklet of such "javascript:" type links, that's why there's no bookmarklet in the post anymore._