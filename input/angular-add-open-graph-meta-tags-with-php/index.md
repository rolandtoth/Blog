---json
{
    "title": "Angular: Add Open Graph Meta Tags with PHP",
    "excerpt": "PHP backend + Angular: can't use server-side rendering to set Open Graph data? Here's a way to dynamically render them for SEO and sharing purposes.",
    "date": "2019-11-13",
    "img": "xrVDYZRGdw4.jpg",
    "bgImg": "caspar-camille-rubin-89xuP-XmyrA-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/89xuP-XmyrA",
    "tags": [
        "angular",
        "php",
        "seo",
        "opengraph"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Recently I almost finished a small Angular project that used a PHP backend to fetch data from an API. Everything went fine until the last feature to implement: adding social share buttons. As you may already know, Facebook scrapes the page's url and reads the title, description, image url, etc. from Open Graph meta tags in the source code. However, if you don't use Angular Universal that requires a node.js server, the page will always be the default "index.html" file, having the hard-coded page title and other meta tags. Using Angular's built-in Title or Meta services won't make a difference, they are updating the DOM only via JavaScript, so viewing the page source will show the unchanged data.

The same holds true for the page title and description meta tags as well.

## Getting PHP into the game

The only way to make these data dynamic, I needed to have "index.html" instead "index.php". This way I could add a PHP snippet to output these tags. Since on the local node server there's no PHP, I kept the original "index.html" and created a duplicate and renamed to "index.php". Then I told Angular to use this file in "angular.json":

```json
"configurations": {
    "production": {
        "fileReplacements": [
            {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
                }
            ],
            "index": "src/index.php",
            ...
```

The tricky part was to find a way to determine the Open Graph data. To do this I generated a "meta.json" file every time the main API json was invoked, to be processed with PHP. You may find a better way, for me it was acceptable because the data was small and it was not a heavy traffic site. Even so, I added a 5 minute cache to prevent server overload, just in case.

In the new PHP file I parsed this "meta.json" (logic is excluded):

```php
<head>
    <base href="/">
    <meta charset="utf-8">
    <?php
    $metadata = @file_get_contents(__DIR__ . '/meta.json');

    if ($metadata) {
        // code that outputs title and Open Graph meta tags
    } else {
       // output default title and Open Graph meta tags as fallback
    }
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
```

## Issues

The above stuff worked beautifully, the only catch is that still needed to set the page title with Angular because it's visible for the users. In my case the data came from the same source so there was no difference between the frontend and backend data. I also purposedly did the main API and meta JSONs generation at the same time, to avoid having any difference. This way if the data on the backend changes, both JSON files will be updated at the same time.

You also should remember to keep the static parts of the two index files in sync.

## Conclusion

This is a relatively easy and simple fix for this problem, provided if you somehow can retrieve page metadata info from the backend. Of course it doesn't substitute Angular Universal in terms of SEO, but at least social share widgets (Facebook, Twitter, etc) can read proper meta tag contents.