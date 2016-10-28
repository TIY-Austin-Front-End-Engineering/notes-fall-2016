
[Table of Contents](/README.md)

# Day 26

## Review

## Challenge
Write a function that takes a card number as a string and returns true if the credit card entered is valid, false otherwise.
- Starting with the first digit and continuing with every other digit, multiply by 2
- Sum all doubled and untouched digits (not numbers) in the new number
- If that sum is a multiple of 10, the number is valid
- For example, given the card number 4408 0412 3456 7893:

```js
//Step 0: 4 4 0 8 0 4 1 2 3 4 5  6 7  8 9  3
//Step 1: 8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3
//Step 2: 8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
//Step 3: 70 % 10 == 0
isValid('4408 0412 3456 7893') // true
isValid('4417 1234 5678 9112') // false
isValid('5000000000000000') // false
```

## Notes
- backend can do things we on the front end cannot
	- persist data
	- manipulate data before or after saving/retrieving from db
	- send emails
	- protect access to data
		- on the front end we should attempt to make it impossible for a user to make an - unauthorized request
	- run scheduled code
- Authentication
	- cookie based auth
	- token based auth
		- oauth
		- custom authorization
	- back end as a service
		-	examples: firebase, parse, backendless, Kinvey

## Resources
