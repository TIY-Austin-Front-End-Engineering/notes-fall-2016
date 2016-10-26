
[Table of Contents](/README.md)

# Day 23

## Review
- update your readme!!!
	- readme is the advertisement for your project and is displayed by github as the homepage of your project repo. Make sure it is an accurate representation of your project.
- use `.scrollTop` property or jquery method to auto scroll a list to the bottom

## Challenge

## Notes
- MVC
	- Model View Controller
		- MVC-like frameworks exist in JS
		- MV-VM better describes backbone (model view view model)
	- Single Responsibility Principle
	 	- each piece of code should be responsible for ONE thing
		- ties well with modular code, because each module can be responsible for ONE thing
		- ties well with functional programming, because we can think of our functions as responsible for one thing only
		- specifically we are talking about separating out visual and UI portions of our application from the State or data management of our application.
	- for an example, a blogging application probably has the following models:
		- blog post
		- users
		- session - almost ALL applications have a session model
	- the same app may have the following views:
		- login view
		- register view
		- user profile
		- settings page (where you manage things about your user or session)
		- post archive
		- individual post view
- views
	- the code that we use on the front end to have an interface with our users
		- DOM manipulation - putting HTML into the DOM, removing HTML from the DOM, updating or changing HTML in the DOM based on how the data changes
		- User initiated events
		- collecting user input
- Models
	- the code that we use on the front end to manage the data.
		- AJAX it (get, put, post, delete)
		- validate data
		- modifying the data in some way
			- eg: user object has a birthday on it. there might also be a method on that model to help me calculate the user's age.
- Collections
	- groups of Models
		- typically just GET and POST ajax requests
		- sorting might happen here too, or filtering
- BEFORE YOU WRITE CODE:
	- plan the crap out of your app.
	- draw your wireframes
	- write WHAT happens WHEN
	- do your data modeling
- writing code:
	- separate our modules by type, so make a folder/directory for models, views, collections
	- name models after the single noun they represent
	- name collections after the plural of the model they represent
	- start by writing html
	- move that html to a render function!
	- setup the router if necessary to route to the page where you would see that html
	- call the render fn from the router
	- instantiate a collection in our router, and pass it into any render fns that need it
	- in the render fn that got the collection, handle user events and use the collection as needed

## Resources
