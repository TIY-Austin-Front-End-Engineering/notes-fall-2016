
[Table of Contents](/README.md)

# Day 53

## Notes
- Accessibility
  - what would our site look like if we didn't have css to view it with
  - logical groupings of html, use of semantic element
  - img alt attribute
    - images that add meaning or are content for the site should be in the foreground of the page, not just a css background so that non-sighted visitors can access it
    - anytime you create an image, give it an alt attribute
    ```html
    <img src="13803ksg34uslr.jpg" alt="a cute cat photo"/>
    ```
    - your alt tag should actually be descriptive
    - if you don't want the image to be read to the user use blank alt text, BUT STILL USE ALT text
    ```html
    <img src="13803ksg34uslr.jpg" alt=""/>
    ```
  - label form elements
    - labels can be attached to form elements, giving them semantic meaning
    - labels have a `for` attribute which links them to the `id` attribute of an input.
			- with React use `htmlFor` attribute instead of `for`
    - labels also add focus to their inputs when they are clicked on
    ```html
    <label for="username">username</label>
    <input id="username" type="text" placeholder="username" />
    <label for="password">PIN</label>
    <input id="password" type="password" placeholder="PIN" />
    ```
    - labels are shown in the HTML just like any other inline element. if you want to hide them visually, you can with css
	- aria roles
		- accessible rich internet applications
		- roles add semantic meaning to non-semantic elements
		```html
		<div role="tab">Tab 1</div>
		```
		- anytime that you're writing divs or spans or other non-semantic elements bc you don't have a good semantic option, ADD AN ARIA ROLE!
	- aria states
    - for non-semantic html elements that are demonstrating stateful information visually, the aria-state attributes are read by screen-readers so that the state is conveyed.
    ```html
    <div role="tab" aria-disabled="true" tabindex="0">Tab 1</div>
    ```
    - the above tab is tab-able, but pressing enter or space on it won't DO anything because it's disabled.
  - focus
    - a pseudo-selector in css, and a state in HTML, it allows interaction with an element
    - not all elements can have focus - by default it's just applied to form elements
    - `tabindex` attribute
      - force another element to have focus
      ```html
      <div role="tab" tabindex="0"></div>
      ```
      - number other than 0 would modify a custom order, 0 puts it in the order it would receive by default were it a focusable element
      - in react it's camelCased: `tabIndex`
    - `this.refs.<ref>.focus()`
      - this would force focus onto the html element used in ref
      ```html
      <div ref="tab1" role="tab" tabIndex="0" onClick={this.ShowTab}>
        Tab One
      </div>
      ```
      ```js
      componentDidMount: function() {
        this.refs.tab1.focus()
      }
      ```
      - jquery also has a `.focus()` method
  - mimic keyboard controls
    - using native submit events when possible instead of click
    - escape for modals
	  - space or enter for buttons, form elements, checkbox

  - still have to consider if our users are on old browsers, and handle those cases

## Resources
- [Aria roles, states, and properties list](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [helpful video by google about accessibility](https://www.youtube.com/watch?v=x18vEEfpK3g)
