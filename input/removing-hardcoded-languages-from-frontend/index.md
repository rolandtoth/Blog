---json
{
    "title": "Removing Hardcoded Languages from Frontend",
    "excerpt": "I always had the list of available languages on the frontend which was an unnecessary complication, they can also come from backend.",
    "date": "2022-06-11",
    "tags": [
        "angular"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

The stack we are usually using is a .NET backend with Angular frontend. For translations we use ngx-translate or Transloco, and both require providing the list of available languages on start. On changing languages an API call is made to the backend for the new translations, and strings on the page are changed instantly.

However, adding a new language required changing both backend/frontend. It was not a big deal but last time I was about to do that, a light bulb went on in my head:

## Why not use the list of languages also from the backend?

Which, in theory, would allow removing all hardcoded languages from the frontend, leaving this logic entirely on the backend.

After this I checked what needs to be modified and actually it was very few:

- APP_INITIALIZER
- language selector
- a cookie used to keep the selected language
- some other components

In Angular we are using APP_INITIALIZER, in which we get general configuration values from the backend before everything starts, a perfect place to extend with language info.

I modified the backend to send a list of language names and country codes and modified an existing service in Angular to persist this data. Then I changed the corresponding components to use this data from now on.

It took about 30 minutes to make these changes, and boom! Everything started to work just as before. Pure magic!

## Conclusion

I very like such small but powerful changes that simplifies things a lot. Having the backend dictate the languages means that the frontend displays what it is thrown to, and as a presentational layer that's what it ultimately has to do. No more need to keep the backend/frontend languages in sync nor any frontend change if a language is added or removed.

This process can be applied not only Angular but for other frameworks or libraries too. I will definitely keep this in my mind for my next projects.
