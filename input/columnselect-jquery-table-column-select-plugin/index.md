---json
{
    "title": "ColumnSelect: Table Column Select Plugin for jQuery",
    "excerpt": "Seems like I'm becoming a jQuery plugin developer but this is not the case. In fact when I find an interesting idea for a plugin that is not yet built I take it as a challenge.",
    "date": "2013-05-02",
    "img": "columnselect-jquery-table-column-select-plugin.png",
    "bgImg": "ren-ran-vulGK2GkhAs-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/vulGK2GkhAs",
    "legacyURL": "https://blog.rolandtoth.hu/post/49441099294/columnselect-table-column-select-plugin-for",
    "tags": [
        "javascript",
        "jquery"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Seems like I'm becoming a jQuery plugin developer but this is not the case. In fact when I find an interesting idea for a plugin that is not yet built I take it as a challenge - provided if it does not require a rocket scientist. That was the case with ColumnSelect too: a new plugin that adds select boxes to choose which column to show.


## History

There are numerous plugins for manipulating table data but strangely I found none that would allow adding select boxes to table headers to switch columns. I worked on the idea for some days to clear up every possible bits of it. Some unforeseen issues and features kicked in but all went fine after all.The final product works fairly different than the first version but it is much cleaner, smarter and more reliable.

## Features

- auto-detect table headers ("th" or "td")
- multi-table support
- optional and customizable "Please select" text
- customizable number of columns to show
- offset number of columns
- show or hide same options in select boxes
- customizable max option text length
- title tags for options if header text is longer then user-defined max option text length
- customizable "more" string
- keep or discard inline or external cell styles

## What to use for

The two main usage scenarios of ColumnSelect are comparing data and saving space by making tables narrower.

### 1) Compare data

This feature is obvious: by displaying two columns side by side it is much easier to see the differences or similarities. The beauty is that users can select any of the available columns to compare.

### 2) Save space

By hiding extra columns tables can be made much narrower so they can fit or can be easier to see on smaller devices.

## Learn more

For more info and demos visit the ColumnSelect page [here](http://columnselect.rolandtoth.hu/).