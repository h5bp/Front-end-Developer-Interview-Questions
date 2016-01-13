# CSS Questions

#### What is the difference between classes and ID's in CSS?

*Not answered yet*

#### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

- Resetting: Remove all the native styles provided by browsers
- Normalizing: Make the browser styles consistent

#### Describe Floats and how they work.

There are `left`, `right` and `none` for `float`. Each value indicates how an
element should float. When `float` is set, each element will get out of its
normal flow and will be shifted to the specified direction, until it gets its
container or another floated element.

#### Describe z-index and how stacking context is formed.

`z-index` tells how elements should be stacked in a screen. Stacking context
can be formed in several situations, but most famously, by a root element and
positioned elements. In each stacking context, `z-index` will be calculated
separately for its children and will stack the children in ascending order.

#### Describe BFC(Block Formatting Context) and how it works.

BFC is a part of rendering a webpage. It's used to determine from which
positioning and clearing should be done. The context is created by several
ways, but the most famously, by a root element, float, positioned elements.

#### What are the various clearing techniques and which is appropriate for what context?

```css
clear:both;
```

```css
overflow: hidden;
height: auto;
```

#### Explain CSS sprites, and how you would implement them on a page or site.

CSS sprite is combining multiple images into a merged one image and use CSS to
render each of them properly for each element.

It's usually implemented using `background: url(...) x-axis y-axis;`, or
both `background-image` and `background-position`.

#### What are your favourite image replacement techniques and which do you use when?

Image replacement technique is to replace a normal text element with an image.
There are many methods such as H5BP and Scott Kellum, as suggested [here](https://css-tricks.com/the-image-replacement-museum/).

My faviourite is H5BP, as it is the simplest and most intuitive one.

#### How would you approach fixing browser-specific styling issues?

*Not answered yet*

#### How do you serve your pages for feature-constrained browsers?
###### What techniques/processes do you use?

*Not answered yet*

#### What are the different ways to visually hide content (and make it available only for screen readers)?

*Not answered yet*

#### Have you ever used a grid system, and if so, what do you prefer?

Yes, but not so many. I prefer Bootstrap.

#### Have you used or implemented media queries or mobile specific layouts/CSS?

Yes.

#### Are you familiar with styling SVG?

*Not answered yet*

#### How do you optimize your webpages for print?

```css
@media print {
  ...
}
```

#### What are some of the "gotchas" for writing efficient CSS?

Usually about CSS selectors.

- Avoid key selector for large numbers of elements
- Prefer class and ID selector to tag selector
- Avoid redundant selectors
- Care of batching

#### What are the advantages/disadvantages of using CSS preprocessors?
###### Describe what you like and dislike about the CSS preprocessors you have used.

*Not answered yet*

#### How would you implement a web design comp that uses non-standard fonts?

- `@font-face` to write my own `font-family`
- `@import` to import prepared web font(e.g. Google Webfonts)

#### Explain how a browser determines what elements match a CSS selector.

- Reads right-to-left
  - Check matching elements for the key(right-most) selector
  - Check if the elements are matching parents for the next selectors

#### Describe pseudo-elements and discuss what they are used for.

It's to style a part of an element, like `::first-letter` or `::before`.

They can be used to add a special symbol before a paragraph, change color of
first character of a line, etc.

#### Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

*Not answered yet*

#### What does ```* { box-sizing: border-box; }``` do? What are its advantages?

*Not answered yet*

#### List as many values for the display property that you can remember.

*Not answered yet*

#### What's the difference between inline and inline-block?

*Not answered yet*

#### What's the difference between a relative, fixed, absolute and statically positioned element?

*Not answered yet*

#### The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?

CSS priority is determined by [specificity and inheritance](https://www.smashingmagazine.com/2010/04/css-specificity-and-inheritance/).

- Specificity: ID > class, psuedo-class > element, psudo-element
- Inheritence: specified value → computed value → used value → actual value

#### What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

*Not answered yet*

#### Have you played around with the new CSS Flexbox or Grid specs?

Yes.

- http://flexboxfroggy.com
- https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties

#### How is responsive design different from adaptive design?

- Responsive: There is one basic layout, and it changes responsively to
  screen changes
- Adaptive: For each possible screen size, there is a distinct layout.

#### Have you ever worked with retina graphics? If so, when and what techniques did you use?

```css
@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) {
  ...
}
```

#### Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

*Not answered yet*
