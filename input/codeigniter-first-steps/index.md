---json
{
    "title": "CodeIgniter First Steps",
    "excerpt": "I started to learn CodeIgniter about half a year ago. Actually learning PHP MVC frameworks had a top priority in my todo list but there was always other things needed to get done. What made me finally jump in was a limitation of my self-made php template. Here are my first opinions.",
    "img": "codeigniter-first-steps.png",
    "date": "2014-05-29",
    "bgImg": "andrew-pons-wbkYwKstquI-unsplash.webp",
    "bgImgUrl": "https://unsplash.com/photos/wbkYwKstquI",
    "legacyURL": "https://blog.rolandtoth.hu/post/81088153966/codeigniter-first-steps",
    "tags": [
        "php"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

## $numPages > 5 ? ‘framework’ : 'spaghetti code’

That was a good tip I read in a comment regarding when to use a framework and when pure PHP is more beneficial. I developed a very simple PHP template during the years which I used for small projects and it served well. But as time went by, clients started asking for new things like contact form instead of static About pages, editing certain sections of a website by their own, etc. These may have seem simple additions to them but actually they required much more effort doing everything manually instead of using existing (and proved) blocks of code. Thinking this over I realized that even if I polished my template to the bone it could not even came close to the simplest MVC frameworks available out there.

## Why CodeIgniter?

If you have heard about Laravel or Yii you may wonder why I have picked CodeIgniter. It’s simple: I’m no PHP guru and even OOP is new to me, not to speak of MVC.

So my preferences for the winning framework were these:

- easy to learn
- well-documented
- easy to configure/deploy
- history

CodeIgniter was a perfect candidate and as I have some insights now I can say it was a good choice too.

## The Learning Process

If you decide to start CodeIgniter you can choose from many learning resources. I decided to learn from videos as there are many available. Tutsplus and PHPAcademy have nice trainings and you can find courses on YouTube as well.

The one from I learnt the most was “Build a CMS in CodeIgniter” by Joost van Veen (Tutsplus). It walks you through the process of creating a CMS from scratch. I followed the training with developing the example CMS locally. It took much time and effort, of course, but was well worth the sweat.

After the first few videos it was clear that CodeIgniter could simplify complex things and allowed building more robust web applications in less time. There is still pretty much left to learn but at least now I have a tool in my pocket to use.

## Deep Water

Well, not that deep. My first CodeIgniter project was a relatively simple website with some forms. The only glitch was that it came in five languages. Because each language could have had different pages I had to come up with a template system that could handle that. I was amazed how easy that was and how conveniently I could fix things site-wide when needed.

## NetBeans

To spice up a bit I decided to find another IDE too with proper CodeIgniter support. I was trying PHPStorm for a while and it was really amazing, unlike its price tag. Another glitch was that it had no CodeIgniter support though that was requested several times in their forums. So I gave another try to Komodo Edit, Aptana 3 (basically Eclipse) and NetBeans. Out of these NetBeans was the clear winner. It had almost all the smart features I liked in PHPStorm plus it had a CodeIgniter plugin so they worked nicely together.

Additionally, NetBeans can be run in portable mode by passing some commandline parameters (you can download my pre-built yaP launcher [here](http://yap.rolandtoth.hu/#examples/NetBeans.ini)).

## What’s next?

My first CodeIgniter site is up and running and I enjoyed setting it up and adding new features to it. When I had a doubt how to implement something a quick google lookup was enough to clear up things so imo CodeIgniter suits well for learning purposes too.

I’m also aware of the concerns about the future of CodeIgniter. Anyway, I’m pretty sure it will be amongst the most popular MVC frameworks in the following years. That time will be enough for me to take my MVC/OOP knowledge to the next level and start learning a more advanced framework. But until then, CodeIgniter will do just fine in my next $numPages > 5 type projects.