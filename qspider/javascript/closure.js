function parent() {
    var a = 10
        ;
    var b = 20;
    console.log(a, b)
    function child() {
        var x = 100;
        var y = 200; console.log(x, y, a)
    }
    child()
}
parent()

//  note :- closure is a memorey which is created whenever we try to acces parent properties inside the child function

// lexical scoping the ablity of js engine to search a variable outside of its current scope.

// high order funciton and callback


function sum(a, b) {
    return a + b;
}

function calculater(a, b, callback) {
    let result = callback(a, b)
    console.log(result)

}
calculater(10, 20, sum)

// arrow function

let a1 = (){
    console.log(' hey i am arrow fucntion')
}
a1()

let a2 =()=> console.log ('this is arrow function');
a2()
let a3 =_=>