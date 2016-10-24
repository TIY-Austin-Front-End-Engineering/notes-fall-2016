import $ from 'jquery';
import _ from 'underscore';

import Unicorn from './unicorn';
import Human from './human';

$('body').append('hi');
_.times(5, function() {console.log("hi")})

let sam = new Unicorn('Samantha');
let jess = new Human('Jess');

jess.sayHi();

const story = jess.name + ' and ' + sam.name + ' went for a walk.'
const story2 = `${jess.name} and ${sam.name} went for a walk.`;

var contentsOfLi = '<div><ul><li>'+array[i]+'</li></ul></div>'
contentsOfLi = `
	<div class="coolDiv">
		<ul>
			<li>${array[i]}</li>
		</ul>
	</div>
`
