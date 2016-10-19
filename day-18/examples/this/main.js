// Problem 1
// console.log(this);
// this is: global scope OR window object (they are the same)
// because... this in a global scope, is the global scope

// Problem 2
var obj1 = {
 myName: 'obj1',
 this: this
};
// console.log(obj1.this);
// this is: the global object
// because... the context is still global, even tho we're inside an object

// Problem 3
var obj2 = {
 myName: 'obj2',
 child: {
     myName: 'obj2.child',
     this: this
 }
};
// console.log(obj2.child.this);
// this is: the global object
// because... no matter how nested in an object we get, if we don't 'change contexts' the value of this is still the same

// Problem 4
function returnThis(aParameter) {
 console.log('the argument was: ', aParameter)
 return this;
}
// console.log(returnThis('This is fun!'));
// this is: global object
// because... the context from which the function was called is still the global context, which means this is still the global object

// Problem 5
// console.log(new returnThis('This is fun!'));
// this is: an instance of the 'returnThis' constructor: an object
// because... using the new keyword changes the context of this to the object being constructed.

// Problem 6
var obj3 = {
 myName: 'obj3',
 thisFn: returnThis
}
// console.log(obj3.thisFn('this is Fun'));
// this is: obj3
// because... the context from which the function was called changed to obj3, because the function LIVES on obj3

// Problem 7
var obj4 = {
 myName: 'obj4',
 child: {
     myName: 'obj4.child',
     thisFn: returnThis
 }
}
// console.log(obj4.child.thisFn('this is fun!'));
// this is: obj4.child
// because... the context from which this was requested was the nested object

// Problem 8
// console.log(returnThis.call(this, 'how does call work?'));
// this is: the global object
// because... call appears to have called our function instead of m&ms, but what happened to the arguments???

// // Problem 9
// console.log(returnThis.apply(this, ['how does apply work?']));
// // this is:
// // because...

// // Problem 10
// console.log(returnThis.apply(obj1, ['how does apply work?']));
// // this is:
// // because...

// Problem 11
// console.log(returnThis.call(obj2, ['how does call work?']));
// this is: obj2
// because... call sets the context to its first argument, and then passes the rest of the arguments along

// // Problem 12
// var newReturnThis1 = returnThis.bind(this, 'how does bind work?');
// console.log(newReturnThis1());
// // this is:
// // because...

// // Problem 13
// var newReturnThis2 = returnThis.bind(null, 'how does bind work?');
// console.log(newReturnThis2());
// // this is:
// // because...

// // Problem 14
// var newReturnThis3 = returnThis.bind(obj4, 'how does bind work?');
// console.log(newReturnThis3());
// // this is:
// // because...

// // Problem 15
// document.getElementById('button').addEventListener('click', function(e) {
//  console.log(this);
// });
// // this is:
// // because...

// // Problem 16
// $('#button').on('click', function(e) {
//  console.log(this);
// });
// // this is:
// // because...

// // Problem 17
// $.ajax({
//  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
//  success: function() {
//      console.log(this);
//  }
// })
// // this is:
// // because...
