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

{% raw %}
```html
<ng-container *ngTemplateOutlet="myTemplate; context: { $implicit: data1 }">
</ng-container>

<ng-container *ngTemplateOutlet="myTemplate; context: { $implicit: data2 }">
</ng-container>

<ng-template #myTemplate let-data>
  <span class="my-class">
    {{ data | myPipe }}
  </span>
</ng-template>
```
{% endraw %}

I used this very often but there's a problem: the reusable template can be reused only in the same view file. So eg. if you have multiple components, you'll need to add the same `ng-template` to each of their views.

## Solution 3: Custom Component

After realizing the issue with Solution #2 above, my idea was to create multiple components so I can just pick the right one needed. However, that would also make too many components, so basically it has the same issue as with pipes.

On a second thought I realized that only one component would suffice if I pass the type of the data to be rendered. Then the component can decide how to output it.

So I created a new component to handle all types of data. Its first name was "CellFormatter" because I used it only in tables. Later I changed it to `RenderValue` which is more general.

### Component

In its simplest form it looks like this:

```javascript
import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

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

It takes the `data` and `template` input variables, and an optional `classes` variable for styling. `Data` may be of multiple types so lazily I just left it's type to `any`.

The `template` tells the component which template to use internally (see later). It's a string but could be an enum too, even though it would make it harder to use (in each component you should pass the enums used to the view). I could make the component decide the data type (that is, the template) on its own, but unfortunately it could not distinguish an enum number from a "simple" number, that's why I explicitly added `template`. Plus this way you can use another template for the same type, eg. "decimal", "decimal-6-digits" for a number.

I intentionally tried to keep it as dumb as possible to make it lightweight - no logic, and using `ChangeDetectionStrategy.OnPush`. In some tables there can be easily several hundred instances of it, so I just wanted Angular to render the output and don't allocate resources to watch for changes.

### View file

The corresponding view file looks like this (abbreviated here for demonstration purposes):

{% raw %}
```html
<ng-container [ngSwitch]="template">

  <div class="{{ classes }}">
    <ng-container *ngSwitchCase="'date'">
        <span title="{{ data | date: 'yyyy-LL-dd HH:mm:ss' }}">
          {{ data | date: 'yyyy-LL-dd' }}
        </span>
    </ng-container>

    <ng-container *ngSwitchCase="'status'">
      <span attr.data-status="{{ data | status }}">
        {{ data | status }}
      </span>
    </ng-container>

    <ng-container *ngSwitchCase="'category'">
      {{ data | category }}
    </ng-container>

    <ng-container *ngSwitchCase="'decimal'">
      {{ data | number: '1.2-6' }}
    </ng-container>

    <ng-container *ngSwitchCase="'person'">
      <span>{{ data[0] }}</span>
      <br>
      <span class="text-sm text-grey-medium">{{ data[1] }}</span>
    </ng-container>

    <ng-container *ngSwitchDefault>
      {{ data }}
    </ng-container>
  </div>
  
</ng-container>
```
{% endraw %}

As you can see it contains an `ngSwitch` to decide what template to use for the given data type. If no template is matched, the data is rendered as-is, using the `ngSwitchDefault` container in the bottom.

Most templates use a simple data but the `person` uses an array:

### Usage

{% raw %}
```html
<!-- default (implicitly "string" data type) -->
<render-value data="{{ data.name }}"></render-value>

<!-- decimal data type -->
<render-value data="{{ data.net_value }}" template="decimal"></render-value

<!-- with classes -->
<render-value data="{{ data.created }}" template="date" classes="font-medium"></render-value>

<!-- multiple values - data needs to be in brackets -->
<render-value [data]="[data.firstName, data.lastName]" template="person"></render-value>
```
{% endraw %}

## Conclusion

The `RenderValue` component greatly reduced the unnecessary code duplication in the project I used. It was a great surprise that I could use it to output data in a dropdown, including custom icons, with only one line of code (in a PrimeNG template).

I was afraid that this solution may reduce performance but haven't noticed that. Actually it just outputs data so it should not put too much extra burden on the application.

Another advantage is that compared to individual view files, this way you'll need to import pipes, constants, etc in this `RenderValue` component only. It was a joy to delete all those unused import lines from the components where I switched to this one.

So far it's doing its job nicely, I'm very happy that I invested some time to find a more sustainable solution for this issue.
