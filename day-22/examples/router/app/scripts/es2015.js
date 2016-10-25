import $ from 'jquery';

let myVar = 'this is outside the block';

if (true) {
	let myVar = 'this is hidden inside the if block';
}

// console.log(myVar);

var coolVar = 'outside the function';

function changeVar() {
	var coolVar = 'inside the function';
}

changeVar();

// console.log(coolVar);

[1,2,3].forEach((curr, i, arr) => {
	// console.log(curr);
})

const handleClick = (e) => {
	e.preventDefault();
	console.log('you clicked me');
}

$('button').on('click', handleClick);


let name = 'jess';
let age = 33;

const data = {
	name: name,
	age: age,
	species: 'human'
}

const destructredData = {
	name,
	age,
	species: 'human'
}
