console.log('spa');

// put a div with class 'container' into the body.
// get a handle on the body
var body = $('body');
// create the div
// to give my div a class you have 3 options:
var div = $('<div class="container"></div>')
div.addClass('container');
div.attr('class') // reading the attribute class, evalutaes to 'container'
div.attr('class', 'container') // setting the attribute class to 'container'

// put the div in the body
// to put anything in the dom using jquery, start with the container, use the appropriate method, then tell it what you want to add
// 4 choices for putting somethign into the dom:
// .text()
// .html()
// .append()
// .prepend()

// body.text(div); doesn't work, bc we aren't putting text directly into the dom, we're putting in an element
// body.html(div); this worked BUTTTTTTTTT might be a little heavy handed in this case because it obliterates ALL the content of the parent, in this case removing our script tags from the DOM too
// body.append(div); the also worked, but it made our div come AFTER the other content, which means our script tags are not the last thing in the body anymore
body.prepend(div); // this one works for our particular use case because div is the first child of body now.

// put a button in the div, the button should say "click me"
// we already have the div
// create the button
var button = $('<button></button>');
// add text to the button
button.text('click me');
// put the button in the div
div.append(button);

// adding event listeners with jquery
button.on('click', function(e) {
	// one way to change the style, with the attr method
	// body.attr('style', 'background: pink');
	body.css('background') // read the background property of the element
	// in general it's still very heavy handed and not preferred to use the css property unless no other option is available bc inline styles are still too specific.
	// body.css('background', 'pink');
	body.addClass('fancy');
});

// this makes anchor tags not work anymore!
$('a').on('click', function(e){
	e.preventDefault();
})









//
