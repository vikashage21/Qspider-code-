let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let x = arr.map((ele, index, array) => {
    console


})

console.log(x);

// note forEach return undefined


let y = arr.find((ele, index, array) => { console.log(ele, index, array); return ele > 50; })

console.log(y); // 60

// note - find only return first element which is true

// note :- findIndex return index of first element which is true and if not found return -1

// note :- filter return all elements which is true and if not found return empty array

// creating reduce example

let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let sunValue = arr1.reduce((acc, ele, index, array) => {
    console.log(acc, ele, index, array);
    return acc + ele;
})

console.log(sunValue); // 550


// json datatype - string


// fetching data example

let p1 = fetch('https://jsonplaceholder.typicode.com/posts/1') //promise

p1.then((response) => {
    let p2 = response.json(); // promise
    p2.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}).catch((error) => {
    console.log(error);
})
// async await example

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console
    }
}


fetchData()

// destructing of arrays
function useState(x){
    return [x, function(){}]


}


let [state, setState] = useState(10);

// destructing of objects

function useRef(x){
    return {current: x}

}


let{current} = useRef(10);


