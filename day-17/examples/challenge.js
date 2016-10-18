
function names(stringOfNames) {
	// separate names into individual people
	var names = stringOfNames.split(', ');
	// make a container for the answer
	var answer = {};
	// loop through all the names
	names.forEach(function(name, i, arr) {
		// split the names into first and last
		var firstLast = name.split(' ');
		var firstName = firstLast[0];
		var lastName = firstLast[1];
		// ask if the last name is already in the answer
		if (answer[lastName]) {
			// last name is there, just add first name
			answer[lastName].push(firstName);
		} else {
			//last name isn't there, create the array and put the first name in it
			answer[lastName] = [firstName];
		}
	});
	/// return the answer
	return answer;
}

var answer = names("George Washington, Bryan Adams, John Adams, Kanye West");

console.log(answer);
