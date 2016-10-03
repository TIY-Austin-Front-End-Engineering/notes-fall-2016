
[Table of Contents](/README.md)

# Day 06

## Review
- hover state examples
	- target the outermost element that should trigger the hover effects
	- apply styles to the hovered elements descendants with the space character selector.
	- see example in examples folder.
- clearfix hack
	- see example in examples folder. used to find floated children
- rem vs em
	- rems are based on the font size of the root element of the page
		- they don't cascade they always reference the same element's font size
	- ems are based on the current elements font size OR if you're using it to specify font size, the parent element.
		- they do follow cascading rules.

## Challenge
Work in pairs to create as many different shapes as you can using one div for each shape. You can use `::before` and `::after` elements.

## Notes
- DRY
	- Don't repeat yourself
	- examples
		- using classes to apply styles to multiple elements at once
		- using base line styles to cascade throughout a document
		- applying padding to the parent rather than margin to each child.
	- my rule of thumb is when i notice myself writing something a third time, i start to think about how to abstract that into more dry code
- sass
	- precompiler for css
		- to manually compile a file:
			- `sass path/to/scss/file.scss`
			- this will output css directly to the console
		- to manually compile into a new file:
			- `sass path/to/scss/file.scss:path/to/new/file.css`
			- will run one time and generate a css file
		- **You want this one** to watch a folder for changes and automatically compile:
			- `sass path/to/folder:path/to/output/directory`
			- will compile any scss files that don't start with an `_`
			- will recompile based on ANY scss file in the directory changing
  - partials
		- using multiple scss files that compile into one css file
		- denoted with an `_` eg: `_header.scss`
		- create a partial file (named as above) in your styles folder
		- import it into the main. `@import path/to/file`
  - nesting
		- use indentation and selectors/rulesets within rulesets to avoid repeating yourself
		- use the ampersand `&` to select for `:hover` or `::after` etc.
		- rule of thumb: don't nest more than 4 selectors deep. if you do, consider giving a selector a classname and targeting that instead.
  - variables
		- storage for VALUES (right side of a css rule)
		- make a file to store our variables
		- import it as the first partial we import in the main
		- choose semantic names, and not names based on colors, ect.
		- declare variables like this:

		```scss
		$color-primary: #083451;
		```

		- use variables like this:

		```scss
		header {
			background: $color-primary;
		}
		```

		- if your variable is imported AFTER your ruleset that uses it, it WILL NOT work. This is why we import the variables at the very top of our main.scss file.
  - mixins
		- storage for a set of rules (one or more entire lines of css)
		- declare mixins like this:

		```scss
		@mixin right-teardrop($curve-size, $background-color) {
			border-radius: $curve-size;
			border-bottom-right-radius: 0px;
			background: $background-color;
		}
		```

		- use variables like this:

		```scss
		@include right-teardrop(3rem, $color-primary);
		```

		- inside the parentheses are optional 'local variables' which you can use within th mixin
			- if you use local variables, you must be sure to supply a value to the mixin when you include it.
			- the order of the local variables matters
			- they must also be separated by commas if you have more than 1
- .ignore files
	- .gitignore - files that we want git to ignore, not track changes of
		- make a file called `.gitingore` in your root of your project
		- put a line for each item to ignore which is the path for the file or folder
		- optionally ignore any files that were compiled by a pre-compiler (such as your css file) bc you can always just re-compile a new copy.
		- include a .gitignore file in every git project
	- .surgeignore - files we want to NOT publish to the public internet when we make our site live
		- same syntax as .gitignore
		- typically include any files/folders not needed by the browser to serve our site
		- this means it is kind of the opposite of our .gitignore file.

## Resources
- [My rhombus example](https://codepen.io/nicerhugs/pen/pEdJNb)
- [CSS shapes](https://css-tricks.com/examples/ShapesOfCSS/)
- [Single Div Art](http://a.singlediv.com/)
- [Sass Nesting guidelines](http://thesassway.com/beginner/the-inception-rule)
- [Git ignore templates](https://www.gitignore.io/)
