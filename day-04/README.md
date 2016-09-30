
[Table of Contents](/README.md)

# Day 04

## Review
- link styling
	- links have default styles applied directly to the a element, so we can't rely on cascading to style them
- vertical alignment
	- target the inline or inline-block elements themselves, not their parents, bc vertical align doesn't cascade OR apply to block elements
	- if we have a block element we want to align with an inline element we have to first change that block to inline-block
- height should be dictated by contents most of the time;
- shorthand properties:
	- border, border-radius,
	- padding, margin, background
		- see review css for examples
- when you use a 0 value, don't give it units.

## Challenge

## Notes
- icon fonts
	- enable changes to icons (pictoral text) without changing image files
	- based on .svg files, using math to make art
	- change color, size, etc, just like you would with any fonts
	- i recommend fontawesome as a great example of this.
		- include fontawesome in your project (link the css in your head)
		```html
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
		```
		- add the code into your html body somewhere:
		```html
		<i class="fa fa-bicycle" aria-hidden="true"></i>
		```
- pseudo elements
	- 2 extra elements added to an element using css
	- `div::before {}` and `div::after {}` for example.
	- before element is added to the page as the FIRST child of the element it is applied to.
	- after element is added to the page as the LAST child of the element it is applied to.
	- MUST use the `content: ''` property to make them show up
	- inline by default, but you can change them to be anything you want using css.
- form element labels
	- use them
	- `for` on the label should match `id` on the input
- responsive design
	- webpage works on any screen size.
	- mobile first
		- begin designing your site on a small screen size, and assume that is good enough.
		- make your screen wider, and readjust your styles as things start looking not great.
	- widths as %
		- make your designs fluid, this will go a LONG way in making things work on various screen sizes
	- use of em or rem for height or top/bottom related issues
		- `body { font-size: 62.5%; }`
	- use of max widths
		- set to hard values, not fluid % but em, rem or px.
	- height dictated by content
		- don't specify height.
		- when it's unavoidable, do content testing to check that your design doens't break with extra content
		- use overflow scroll or hidden when necessary to accommodate overflowing content
	- use of meta viewport tag
		- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
	- use of media queries
	- keyboard shortcuts
		- ctrl d - forward delete
		- ctrl a - jump to the beginning of a line
		- ctrl e - jump to the end of a line
		- ctrl k - delete an entire line
		- ctrl p - move cursor up
		- ctrl n - move cursor down
		- ctrl f - move cursor forward
		- ctrl b - move cursor back
		- cmd shift d - duplicates a line (text editor)
		- ctrl shift m - markdown preview (text editor)
		- cmd w - close a tab
		- cmd shift w - closes a window
		- cmd shift [ or ] - move between tabs
## Resources
[RWD checklist](http://rwdchecklist.com/)
