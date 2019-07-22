---json
{
    "title": "Diff dirs with PhpStorm everywhere",
    "excerpt": "I was searching for a capable diff tool to compare directories recursively. Like the way I usually do in PhpStorm. But isn’t that possible with it already?",
    "img": "diff-dirs-with-phpstorm-everywhere.png",
    "bgImg": "linus-nylund-MWULRHM3Vrg-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/MWULRHM3Vrg",
    "date": "2017-03-30",
    "legacyURL": "http://blog.rolandtoth.hu/post/159009748342/diff-dirs-with-phpstorm-everywhere",
    "tags": [
        "phpstorm"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

After a quick search I found this in their [Help](https://www.jetbrains.com/help/phpstorm/2016.3/comparing-folders.html):

> You can also open the difference viewer without running PhpStorm. This is done through the following command:
> 
> ```
> <path to PhpStorm executable file> diff <path_1> <path_2>
> ```
> 
> where `path_1` and `path_2` are paths to the folders in question. 

Just what the doctor ordered! I immediately set up a button in my file manager and I was happy as I could be.

<off to diff>