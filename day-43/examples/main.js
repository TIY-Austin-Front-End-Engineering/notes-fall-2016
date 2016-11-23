function pad(num, target) {
	var str = String(num)
	while (str.length < target) {
		str = '0' + str;
	}
	return str
}

// console.log(pad(45, 5));

// make it recursive:
function recurPad(num, target) {
	// console.log('running recurPad', num);
	var str = String(num);
	// are we there yet?
	if (str.length >= target) {
		//  if so, just return str
		return str;
	} else {
		// if we are not there yet,
		// do something then call the function again
		str = '0' + str;
		return recurPad(str, target);
	}
}

// console.log(recurPad(45, 5));

// recur fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13
// should give us the first target digits of fibonacci in an array
function fibonacci(target, arr) {
	console.log('running fib,', arr);
	// if arr is not anything make it an empty array
	arr = arr || [];
	//are we there yet?
	if (arr.length >= target) {
		// if yes, return
		return arr;
	} else if (arr.length === 0) {
		// if no, do something and try again
		return fibonacci(target, arr.concat(0));
	} else {
		// if no, do something and try again
		// get the last digit and add it to the 2nd to last digit
		// if no second to last digit, add 1 instead
		var lastDig = arr[arr.length-1];
		// always write a comment to explain a ternary operator
		// if the digit 2 back is undefined, we should use 1 otherwise we will use that digit
		var digToAdd = arr[arr.length-2] === undefined ? 1 : arr[arr.length-2];
		// the above ternary is the same as the below if/else
		// if (arr[arr.length-2] === undefined) {
		// 	digToAdd = 1
		// } else {
		// 	digToAdd = arr[arr.length-2]
		// }
		var newDig = lastDig + digToAdd;
		return fibonacci(target, arr.concat(newDig))
	}
}

console.log(fibonacci(10)); // [0, 1,1,2,3,5,8,13,21,34]
console.log(fibonacci(0)); // []










//
