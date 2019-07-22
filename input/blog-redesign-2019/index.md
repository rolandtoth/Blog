---json
{
    "title": "Blog Redesign 2019",
    "excerpt": "There are some sites that I plan to rewrite to static, and this time my blog was the next in the queue. Here are some details on the process.",
    "img": "blog-redesign-2019.png",
    "bgImg": "jo-lanta-68KjM0kfsVo-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/68KjM0kfsVo",
    "date": "2019-07-18",
    "tags": [
        "eleventy",
        "design"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

## Going self-hosted

Tumblr is good, but it's not for the kind of blogging I'm doing. Back then I wanted an online solution but as time passed I was not entirely satisfied. First, I would have liked to have control over everything on my site, which was obviously not possible on Tumblr. The theme I installed was a bit sluggish and the online editor drove me crazy as well. All these problems were easier to solve with self-hosting.

## Design

I was fine with the existing layout but wanted the design to be more fresh. I would have like to make it look similar to my portfolio site as well, so I made it share common design elements with it. I also added big header images to posts, which took some time to find (mostly at Unsplash) but it feels much better this way.

## Development

[Eleventy](https://www.11ty.io/) is a static site generator that I like very much to work with. Since only the commenting feature wa dynamic and it was powered by Disqus, there was nothing against using it instead of a CMS or a framework. I learned a few new things in this project about Eleventy (eg. how to deal with tags), and added some new filters as well.

Actually using Eleventy is more of a frontend-style development since it's uses node.js. Unlike in other projects, I organized posts the way that one directory contains everything for a post: the content (markdown) and all assets (images, downloadable files, etc). This is very handy, I can see everything at one place, I could refer to assets easily by their filename, etc.

For the big header images I used webp format, actually with no fallback because I don't really care in this site if they are not displayed. For most users they do, and they are much lower in size (60-70KB at max).

I could only periodically work on this project, that's why it took months to finish. I migrated posts manually because I wanted to get rid of any junk, which was also slowing things down a bit. After all I could reuse almost everything from previous projects. The extra time I spent on it was because I tried to improve my posts where I could (eg. wording, adding images, etc).

## Search

A search is essential ona  blog and it was challenging to implement one on a static site. I could generate a search.json as they usually do, but this time I did it with my FilterBox utility. Most of the time I spent on this feature was CSS styling, the actual setup was a no-brainer. As often, I realized that there's a need for some extra features, so I added them. This tool is as simply as it can but it's amazing how versatile it is. I used it a lot during the development to jump to posts quickly.

## The result

I really like the new look and feel, and that I can modify anything easily because it's hosted by me. I'm sure after this upgrade I will have more motivation to add new posts in the future :)

### Things I like the most

- **main search ([FilterBox](https://github.com/rolandtoth/FilterBox))**: instant results, use ```up```/```down``` arrows to select a result, and ```enter``` to visit
- **large post header images**: feels so much better
- **copy to clipboard button**: the Copy icon turns to a Checkmark icon on click, indicating a successful copy
- **speed**: not comparable to the previous version