
// string methods

let str1 = 'hello world';
console.log(str1[0])

// slice start index , end index
console.log(str1.slice(0, 5)) //hello

// using negtive index
console.log(str1.slice(-10, -5))


console.log(str1.slice(-10, 5))

let db = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic recusandae aliquam illo. Molestiae corrupti modi sapiente fugit eius aperiam reprehenderit aspernatur tempora deleniti officiis porro cumque, vel laboriosam harum?'

console.log(db.slice(0, 10) + '...')

//substrings

// acpecting last and start index
// end_index always gets ignored
console.log(str1.substring(0, 5))
// substring never acpect the negtive index
console.log(str1.substring(-10, -5))
console.log(str1.substring(-10, 5))

// start index is changing into 0 index value(0,5)

console.log(str1.substring(5))
console.log(str1.substring(-5))


// note :- substring is not using nowdays

// substr
console.log(str1.substr(0, 5))


// trimstart , trim , trimend

let str2 = '          javascript'
console.log(str2)

// triming str2

// trim()

console.log(str2.trim())

// trimStart()
console.log(str2.trimStart())

// trimEnd()
console.log(str2.trimEnd())



// toupperCase and toLowerCase()
let str3 = 'hello React '

console.log(str3.toUpperCase())
console.log(str3.toLowerCase())

let account_no = 85458446;

let newChar = account_no.toString().slice(0, 5)
console.log(newChar)


// padstart , padend

let val = newChar.padEnd(10, "x")

// maxlenght , char 


console.log(val)


// function to check a number is pallindrome


function pallindrome(word) {
    let arr = word.split("").reverse().join("")
    console.log(arr)
    if (word === arr) {
        console.log('true')
    } else {
        console.log('false')
    }

}


pallindrome('racecar')


// replace

let str4 = 'welcome everyone'


console.log(str4.replace('everyone', 'vikash'))

console.log(str4.replaceAll('everyone ', 'vikash'))



// methods

// slice
// substring
// substr
// trim, trimstart , trimEnd
// toUpperCase,toLowerCase
// padStart,padend
// replace , replaceAll

// Array
// split
// join
// reverse



// javascript 
// array , object , string 



// array advance method

let arry = [10, 20, 30];



let val1 = arry.forEach((element, index, array) => {
    // console.log(element)
    // console.log(index)
    // console.log(array)
    return console.log('hello')

})

console.log(val1)

console.log('----------------');
// arry.map()

let val2 = arry.map((e, i, arr) => {

    console.log(e, i, arr)

    return 'hello'
})


// compression return boolen(true, false)


console.log(val2)
// different between forEach and map method

// forEach - it returns undefined

// filter

let val3 = arry.filter((element) => {
    return element > 40
})
console.log(val3)

// return element 

// find (callback function)


let result = arry.find((element) => {
    return element > 25
})

console.log(result)


let result2 = arry.findIndex((element) => {

    return element > 25

})

console.log(result2)


