var n1 = 10;
console.log(n1)
//  this is number type datatype
console.log(typeof n1)

var n2 = 'hello world'
// this is string data type
console.log(typeof n2)

var n3 = true;
console.log(typeof n3)
//  this is boolean type of datatype

var n4;
// the output is undefined


console.log(n4)

console.log(typeof typeof n4)


// console.log(abc)
// this is will show not defined 

var n5 = null
// by developer added the value null for future to add the new value

console.log(typeof n5)

var s1 = Symbol('hello')
console.log(s1)



// type of variables

// there are two type of variable 
// goble and local variable


// ways of creating varibles 
// var , let , const

// scopes of variables

// 5 types 

// globel scope
// script scope 
// block scope 
// lcoal scope  function scope 



// global variable 
// var a = 10; <= global scope
// let b=5; <= script scope
// let c=5; <= script scope


// conditional /loops  function

// goble vraible / gobal scope  <=  var   local variable 

// local varibale / block scope <= let / const => local scope function scope




var a = 10;

//  this gobal varibale 

debugger
console.log(a)

for (let index = 0; index < 5; index++) {
    console.log('inside the loops ' + a)

}

if (true) {
    console.log(a)
}


if (10 > 2) {
    var x = 10;
    let y = 20;
    const c = 30

    console.log(x, y, c)
}

console.log(x)


