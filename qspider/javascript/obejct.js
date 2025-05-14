// object methods

// object.keys()
// object.values()
// object.entries()
// object.fromEntries()

// creating a demo obejct

let obj = {
    id:1,
    Name:'john'

}

console.log(Object.keys(obj))

console.log(Object.values(obj))


// object.entires
let nestedArr = Object.entries(obj)
console.log(nestedArr)

// its return nested array with both key and values

let value=Object.fromEntries(nestedArr)

console.log(value)


// js object convert to json Json.stringify(jsObject)

let jsonData = JSON.stringify(obj)

console.log(jsonData)
console.log(typeof jsonData)


let p1= fetch('link')

console.log(p1)

// Promise{
//     prototype :Promise <- then , catch , finally

    
// }


p1.then((resp)=>{

    console.log('got Data')

    console.log('res.json()')

})
