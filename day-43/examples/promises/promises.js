// jquery's version of promise includes then, fail and done
// they are the same as success, error, complete
$.ajax('http://api.github.com/users/nicerhugs')
	.then(function(r) {
		console.log(r);
	})
	.fail(function() {console.log('something went wrong');})
	.done(function() {console.log('it is finished');});

// let's write our own promise
function getPeople(people) {
	// return a promise instance
	// the promise constructor takes a callback
	// that callback gets 2 arguments, both of which are also callbacks
	var promise = new Promise(function(resolve, reject) {
		var results = []
		people.forEach((person, i, arr) => {
			$.ajax(`http://api.github.com/users/${person}`, {
				success: (perResponse) => {
					results.push(perResponse)
					if (results.length === people.length){resolve(results)}
				},
				error: reject
			})
		})
	});
	return promise;
}


// es2015 promises have only then and catch chains
getPeople(['nicerhugs', 'bengillin', 'drake-fish']).then(function(arr) {
	console.log('our promise resoved', arr);
}).catch(function() {
	console.log('our promise was rejected');
})
