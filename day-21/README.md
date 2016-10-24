
[Table of Contents](/README.md)

# Day 21

## Review

## Challenge
Write your own function called `forEach` that takes an array or array like object and a callback as its two arguments, and works like the `.forEach()` method. Do not use the `.forEach()` method in your function.

If you finish, write a map, filter, and reduce function, as well.

```js
function logger(curr, i , arr) {
	console.log(curr);
}

function add5(curr, i, arr) {
	console.log(curr + 5);
}

forEach([1,2,3], logger);
// logs 1 2 3

forEach([1,2,3], add5);
// logs 6 7 8

// the above should be same as
[1,2,3].forEach(someFn);
// does something 3 times
```

## Notes
- build tools
	- single page applications
		- 1 html file
		- javascripts file or files
		- css file or files
	- examples: gulp, npm or node scripts, browserify, webpack, grunt, broccoli
		- take a bunch of images and resize them
		- compile sass into css
		- compile esNext into es5 or lower
		- start a server locally
		- minify your code
	- STARTING A NEW PROJECT:
		- clone the repo
		- get into the directory where the project lives
		- **BE VERY CAREFUL WITH THIS** remove the git history `rm -rf .git` (git(master) should go away at this point)
		- install everything `npm install`
			- install all the packages in the `package.json` file that are listed as dependencies
			- (in OUR build tool) it also starts a server, watches your sass, watches your javascript for changes and compiles
				- node_modules folder is where all the NPM installed packages live
				- docs folder is where the browser ready files live
					- **NEVER WRITE IN THE DOCS FOLDER**
				- app folder is where we write our code
					- **ALWAYS WRITE IN THE APP FOLDER**
		- open the browser at `localhost:8080` and see your project live
		- write code in the app directory
		- AS SOON AS YOU WRITE YOUR BASIC html
			- make a git repo
			- commit your work
			- and keep committing!
	- CONTINUING TO WORK ON A PROJECT
		- start the server and the compilers `npm start`
		- to install new packages
			- `npm install --save <name of the package>`
		- to use packages
			- for sass or css packages, `@import` them into your `main.scss` by using their path in the `node_modules` folder
			- for javascript packages, use es2015 module syntax
- es2015
	- modules
		- discrete pieces of javascript code
		- introduce "module scope" which mean variables are only available within a module.
		- to use a module we must import it.
			- for npm installed packages: `import <var name> from '<package name>';`
			- for modules we wrote: `import <var name> from './path/to/file';` (they must be exported first)
		- to use a module we wrote we must export it
			- `export default <thing>;`
	- template strings
		- use backticks \`\`
		- can be on multiple lines
		- can interpolate var names using `${}` to escape them
	- `let` `const`
		- replacing the `var` keyword
		- `const` is special because it cannot be reassigned
		- they introduce a new scope - code blocks scope
 	- arrows


## Resources
- [babel](http://babeljs.io/)
- [the tool you can use for your homework](https://github.com/TIY-Austin-Front-End-Engineering/spa-scaffold)
