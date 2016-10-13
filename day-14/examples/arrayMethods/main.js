var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

instructors.forEach(function(instructor, i, arr) {
	// console.log(instructor.firstname, i);
	// console.log('hi');
	return 'hi'// this does nothing!
});

///filter!

var filteredInstructors = instructors.filter(function(instructor, i, arr) {
	if (instructor.teaches === 'JavaScript') {
		return true;
	}
});
console.log(filteredInstructors);


var shortNamedInstructors = instructors.filter(function(instructor, i, arr) {
	if (instructor.firstname.length <= 4) {
		return true;
	}
});
// console.log(shortNamedInstructors);

// map!

var noReturnValue = instructors.map(function(instructor, i, arr) {

});
console.log(noReturnValue);

var returnIndex = instructors.map(function(instructor, i, arr) {
	return i;
});
console.log(returnIndex);

var firstNames = instructors.map(function(instructor, i, arr) {
	return instructor.firstname;
})
console.log(firstNames);
// combined!

function javascriptInstructors(instructor, i, arr) {
	return instructor.teaches === 'JavaScript';
}

function getFirstName(instructor, i, arr) {
	return instructor.firstname;
}

var firstNamesOfJS = instructors.filter(javascriptInstructors)
	.map(getFirstName);

console.log(firstNamesOfJS);

// reduce!

console.log([1,2,3,4,5].reduce(function(returnValueSoFar, number, i, arr) {
	return returnValueSoFar + number;
}, 0));










//
