// vanilla
var divs = document.querySelectorAll('div');
var inputs = document.querySelectorAll('input');
//jquery
var $divs = $('div');
var $inputs = $('input');

// adding a class
// vanilla
for (var i = 0; i < divs.length; i++ ){
	divs[i].classList.add('selected');
}

//jquery
$divs.addClass('unselected');

// removing a class
// vanilla
for (var i = 0; i < divs.length; i++ ){
	divs[i].classList.remove('selected');
}

//jquery
$divs.removeClass('unselected');

// WRITING text to a non-form element
//vanilla
divs[0].textContent = 'i added this to the div with js'

//jquery
$($divs[1]).text('i added this to div with jquery')

//READING text from a non-form element
//vanilla
console.log(divs[0].textContent);

//jquery
console.log($($divs[1]).text());

// WRITING text to a form element
//vanilla
inputs[0].value = 'i added this to the input with js'

//jquery
$($inputs[1]).val('i added this to input with jquery')

//READING text from a form element
//vanilla
console.log(inputs[0].value);

//jquery
console.log($($inputs[1]).val());

// CREATE new elements
//vanilla
var newDiv = document.createElement('div');
console.log(newDiv);

//jqeury
var $newDiv = $('<div class="coo-div">text can go right here</div>');
console.log($newDiv);

// Add to page
//vanilla
divs[0].appendChild(newDiv);

// jquery
//target the parent, append, prepend or html the new element into place
$(divs[1]).append($newDiv); // adds as last child
$(divs[1]).prepend($newDiv); //adds as first child
$(divs[1]).html($newDiv); // adds as ONLY child.




//
