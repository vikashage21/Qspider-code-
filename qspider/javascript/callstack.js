console.log('hello')
function getData() {
    console.log('fetching data form backend')
}
console.log(n1);
var n2 = 60;
console.log(n1)
var n1;
console.log(n2)
var n2 = 70;
console.log(getData)
n1 = 800;
getData()
console.log('bye bye')

// result

// hello
// undefiend
// undefined
// 60
// function
// fetching the data form backend
// bye


console.log('hii')
console.log(a)
var a = function () {
    console.log('i am func expresssion')
}

console.log(a)
var b = 30;
console.log(a, b)
a()
console.log('bye'
)

// result
// hii
// undefined
// function
// fucntion , 30
// i am fun expression 
// bye

// parameterized function

function sum(n1, n2) {
    output = n1 + n2
    console.log(output)

    console.log(arguments)
}

sum(10, 30)