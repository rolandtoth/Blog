---json
{
    "title": ".NET Model Generator with Eleventy",
    "excerpt": "Being lazy to copy-paste data all the time, I spent a few hours to create a very simple model generator with Eleventy. Here are some details about the process.",
    "img": "dotnet-model-generator-with-eleventy.jpg",
    "bgImg": "windrader-2991696_1920.webp",
    "bgImgUrl": "https://pixabay.com/photos/windräder-wind-power-energy-blue-2991696/",
    "date": "2019-08-11",
    "tags": [
        "eleventy"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Well, it's not just about lazyness but saving time and possible errors. I often have to create .NET models, sometimes with many properties (20-30+), and also a custom DB entity that basically uses the same properties. After a while I realized that the process should be made simpler, where I just need to set the input data.

Previously we (including our team) were manually duplicated existing files, and then copy-pasted DB field names and adjusted a few things. I took this step forward as I could copy DB field names (each in one line) then applied a regex search-replace and partly I was done. But I had to do this 4 times each occassion, and then still had to adjust some things and hope everything would be OK.

## Choosing the weapon

The first tool that came to my mind was Eleventy. I could use PHP or a simple JavaScript application as well, but Eleventy seemed the best for this purpose. It's a static site generator that usually spits out .html files, but that's not hardcoded. I wanted .cs files, and that's only a matter of setting permalinks that ends with this extension.

## Setting up

First I created one directory per model, where I added two template files: one for a model, and one for the custom DB entity. I added a .json file as well, containing all the input data (property names, types, namespace, etc). After some fiddling around I got the result I needed: two output files that matched my expectations.

I added a few nice-to-have features as well, like generating "nice" displaynames (eg. "PackageCode" => "Package Code"), automatically setting the right method for getting the value (eg. "GetSafeDateTime" for the "DateTime" type properties), etc). I wouldn't like to overcomplicate things because this is only a boilerplate generator to get started fast.

## Fine-tuning

I was happy with the results and wrote a small documentation to it. While doing so I realized that I could probably merge all these files into one. The only problem was that I had no clue how to output several files from one template in Eleventy. I almost granted for sure that it was not possible, but on GitHub I saw a few lines about using pagination to achieve such a thing. It took me some time to grasp the concept (getting old?), but finally I succeeded.

Here is a sample Nunjucks template (only contains a front matter part since template logic is in the layout file):

```javascript
---json
{
    "classNames": [
        "MyModel",
        "VW_TWS_MY_MODEL"
    ],
    "properties": {
      "Address": ["string"],
      "PackageCode": ["string", false, "PKGCODE"],
      "Registered": ["DateTime?"],
      "UserId": ["int"],
      "UserName": ["string"]
    },
    "namespace": "Infrastructure.Core.Models.MyModels",
    "customDbEntityName": "wkResult",

    "WARNING": "--- DO NOT EDIT BELOW ---",

    "pagination": {
      "data": "classNames",
      "size": 1
    },   
    "layout": "layouts/default.njk",
    "permalink": "/{{ page.fileSlug }}/{{ pagination.items[0] }}.cs"
}
---
```

## Nuissances

I don't really like that for this tool I need 104 Mb of npm packages, but that's how it works. Plus one needs node.js installed as well. Because of this, perhaps a JavaScript tool would have been a better choice.

## TL;DR

As it turned out, Eleventy is a great tool for generating files that are feeded with data, let it be .html or other file type. For this model generator it's only a matter of supplying the right input data and get the results in a fraction of a second.