
[Table of Contents](/README.md)

# Day 29

## Review
- permissions overview
	- owner permissions override role permissions
	- user permissions override role permissions
	- permissions always refer to a type of user, and what they can do to a type of data
	- usually we as front end devs don't have to deal with this, bc the back end will do it for us
- multiple models in one view
	- discouraged
	- break down our views into smaller pieces, which do only rely on one type of data

## Challenge
Create a function that validates a password by making sure it meets the following requirements:
- must contain at least 1 digit
- must contain at least 1 lowercase letter
- must contain at least 1 uppercase number
- must contain at least 1 special (punctuation) character
- cannot contain any spaces
- must be at least 8 characters long

it should return true or false based on the above criteria

```js
validatePassword("wh4t'sUp?") // returns true
validatePassword("what'sUp?") // returns false (has no number)
validatePassword("wh4t's Up?") // returns false (has a space)
validatePassword("wh4tUp?") // returns false (too short)
validatePassword("2.ah93l'j") // returns false (has no uppercase letters)
validatePassword("429LKH3.9") // returns false (has no lowercase letters)

```

my regex solution: `/^(?=.*\d)(?!.*\ )(?=.*[A-Z])(?=.*[a-z])(?=.*\W).*$/`

## Notes
- more advanced backbone views
	- we made a view that takes any children and automatically renders them so that we could include a nav on each page without re-writing the nav code (in the viewWithNav)
	- we made a template that performs a decision based on data (whether we're logged in) and returns different html based on that decision (in the nav)
- getting error messages in views
	- we figured this out in the login file

## Resources
