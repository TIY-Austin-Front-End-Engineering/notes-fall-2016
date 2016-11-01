
[Table of Contents](/README.md)

# Day 27

## Review
- login and CRUD with backendless

## Notes
- `$(document).ajaxSend(callback)`
	- a jquery function that allows us to register an event listener to EVERY ajax request the page makes. We can use it to add headers to the ajax request, for example.
	- the callback takes 3 arguments, the event, the raw xhr object, and the jquery settings object.
	- see the router file in today's examples folder for an example of how it works

## Resources
- [modifying xhr request headers](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader)
