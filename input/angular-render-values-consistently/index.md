---json
{
    "title": "Angular Formatted Output Everywhere",
    "excerpt": "Ever got bored of formatting the same data type on the frontend at multiple places, to output them consistently everywhere? Just create a dumb component and enjoy the cleanliness.",
    "date": "2021-08-21",
    "tags": [
        "angular"
    ],
    "type": "post",
    "layout": "layouts/@post.njk"
}
---

Chances are that data that comes from the backend contains elements that appear at multiple places. It doesn't necessarily have to be multiple components or pages, for example a table may contain multiple numeric columns where you would like to format values as decimals with two digits. Or currencies, dates, enums, custom data, etc. You will probably find a way to format them, but the same formatting should be copied over to other columns too, which doesn't make it DRY and can cause issues later.

Here are some solutions I used in my Angular projects so far. Spoiler: the last one is the winner!

## Solution 1: Pipes

Pipes are great, and they can pretty much abstract the issue away. However, unless you create your own pipes with no input variables, you may end up using different parameters and so render data with different formatting. Also it may result in dozens of pipes depending on the project size, which is not optimal.

## Solution 2: ngTemplateOutlet

In Angular view files you can use `ng-container` with `ngTemplateOutlet`, which can help if the same data type needs the same formatting:

```html
<ng-container *ngTemplateOutlet="myTemplate; context: { $implicit: data1 }"></ng-container>
<ng-container *ngTemplateOutlet="myTemplate; context: { $implicit: data2 }"></ng-container>

<ng-template #myTemplate let-data>
  <span class="my-class">
    {{ data | myPipe }}
  </span>
</ng-template>
```

I used this very often but there's a problem: the reusable template can be reused only in the same view file. So eg. if you have multiple components, you'll need to add the same `ng-template` to each of their views.

## Solution 3: Custom Component

After realizing the issue with Solution #2 above, my idea was to create multiple components so I can just pick the right one needed. However, that would also make too many components, so basically it has the same issue as with pipes.

On a second thought I realized that only one component would suffice if I pass the type of the data to be rendered. Then the component can decide how to output it.

So I created a new component to handle all types of data. Its first name was "CellFormatter" because I used it only in tables. Later I changed it to `RenderValue` which is more general.

### Component

In its simplest form it looks like this:

```javascript
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'render-value',
  templateUrl: './render-value.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderValueComponent {
  @Input() data: any;
  @Input() template: string = 'string';
  @Input() classes: string = '';

  constructor() {}
}
```
