
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