---json
{
    "title": "Tailwinded thoughts",
    "excerpt": "I have been doing CSS for about a decade but only recently gave a try to TailwindCSS. Should have done earlier.",
    "img": "tailwinded-thoughts.png",
    "date": "2020-12-30",
    "tags": [
        "css"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

I first learned about TailwindCSS in a ProcessWire forum post years ago. I was writing custom CSS at that time (with a CSS framework sometimes) and seriously I was not convinced that utility classes all over the HTML file was a better option. I was happy with my setup that involved only Gulp, I didn't need another layer of complexity to my workflow.

Even so, I was curious about TailwindCSS, and I knew I can only see whether it worked or not if I try. Unfortunately there was no project in sight where I could gave it a go. Another motivation was that I realized I was creating more and more utility classes on my own. So why not try something that is (probably) more sophisticated and mature?

## New project, new way to skin a cat

Months ago we started a new project and I was searching for a minimal but capable CSS framework. I needed something more documented than my earlier CSS (well, zero docs :)), so that other teammates could more easily contribute. But just like my previous attempts I saw clever things here and there and nothing particular that would make me switch. Then TailwindCSS came to my mind and I thought this is the perfect time to try.

I spent a few hours on trying to "skin a cat" with Tailwind. After I understood how it works and how can I customize things (setting up units, corporate colors, etc), I began liking it. I found many small but clever solutions that my primitive CSS helpers didn't have. It took about a week until I got familiar with the system, and after that it was a joy to work with. I was using VSCode with [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension that was really handy by suggesting class names in HTML files (and showing the underlying CSS rules on hover).

I like that I could easily format elements in devtools just by applying different CSS classes to them, then just copy and paste those over to the source code. Plus, being an Angular project, saving the view file doesn't trigger the SASS rebuild, resulting in a much faster build.

## Verdict: PASS

If you ask me now I would say if TailwindCSS fits in your project/workflow, go ahead and use it. At least give it a try and see. I was convinced that it's not an anti-pattern to use that many classes in HTML (being an oldschool frontend dev it's not a small thing), even though you can use the `@apply` function to simplify things. The final fact that convinced me was when I went back to a tailwind-less project and I could feel its absence, in a negative manner. Writing CSS will always be messy because of the way it works, but TailwindCSS offers a different approach that makes it easier to work with.
