---json
{
    "title": "Scoped CultureInfo",
    "excerpt": "C# snippet to temporarily switch the thread's culture",
    "date": "2021-06-19",
    "tags": [
        "csharp"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Lately I encountered a few occasions where I needed to set another culture for the current thread. For example when parsing exchange rates from an external provider where rates come with a specific (non-English) number style. It's easy, just set another CultureInfo and you are good to go, eg.:

```csharp
Thread.CurrentThread.CurrentCulture = CultureInfo.GetCultureInfo("fr-FR");
Thread.CurrentThread.CurrentUICulture = CultureInfo.GetCultureInfo("fr-FR");
```

The issue with this is that you would probably need restore the original CultureInfo after that, which you can do by saving the original CultureInfo beforehands and restore at the end. This works fine, but that's too much repeated code, for which I created a small helper class called CultureInfoScope.

## CultureInfoScope.cs

The idea is to utilize the `Dispose()` method at the end of a `using` block to restore the original culture. That is, we only need to supply the new CultureInfo and the thread's culture would be changed temporarily for the scope, and finally restored at the scope's end:

```csharp
using System;
using System.Globalization;
using System.Threading;

namespace HelperClasses
{
    public class CultureInfoScope : IDisposable
    {
        private readonly CultureInfo originalCulture;

        public CultureInfoScope(CultureInfo culture)
        {
            this.originalCulture = CultureInfo.CurrentCulture;

            Thread.CurrentThread.CurrentCulture = culture;
            Thread.CurrentThread.CurrentUICulture = culture;
        }

        public void Dispose()
        {
            Thread.CurrentThread.CurrentCulture = this.originalCulture;
            Thread.CurrentThread.CurrentUICulture = this.originalCulture;
        }
    }
}
```

## Usage

Using CultureInfoScope is pretty straightforward:

```csharp
using (var _ = new CultureInfoScope(CultureInfo.GetCultureInfo("fr-FR"))
{
    // code here that requires "fr-FR" culture
}

// scope disposed, thread will continue with original culture
```

It can also be a oneliner if the entire code within the current scope needs a different culture (from C# 8.0):

```csharp
{
    using var _ = new CultureInfoScope(CultureInfo.GetCultureInfo("fr-FR"));
    
    // code here that requires "fr-FR" culture
}
```

## Conclusion

It's a nice and simple tiny helper class that makes switching the thread's culture easy and elegant. I have used it in more projects than I originally thought I would need, confirming that it was worth the effort to refactor.
