
[Table of Contents](/README.md)

# Day 54

## Notes
- React Transitions
	- basic hover effect css only transitions are as normal with React
	- any transitions that would involve js will need to be handled differently
		- for example moving classnames around or adding or removing elements from the document
		- first get your code working without flashy transitions
		- `npm install --save react-addons-css-transition-group`
		- import the library onto the component you want to have transitions with
		- wrap your transitioning component IN the imported component
			- it requires 3 props:
				- `transitionName`: a name you want to refer to your animation by in css
				- `transitionEnterTimeout`: how long should the entering element take in ms to transition
				- `transitionLeaveTimeout`: how long should the leaving element take in ms to transition
			- the children require a unique `key` prop so that the transition group component knows about them
				- it will handle the elements coming and going based on your set timeouts and give classnames based on your transitionName
		- use css to handle the classnames for the transitions
			- your entering element will be given 2 classnames as it is entering:
				- `<transitionName>-enter` - the starting condition for the entering element
				- `<transitionName>-enter-active` - the ending condition for the entering element
			- your leaving element will be given 2 classnames as it is leaving:
				- `<transitionName>-leave` - the starting condition for the leaving element
				- `<transitionName>-leave-active` - the ending condition for the leaving element

## Resources
- [React Transitions docs](https://facebook.github.io/react/docs/animation.html)
