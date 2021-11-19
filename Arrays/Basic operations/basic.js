//Adding an element at the end of array o(1)
let array=[1,2]
array.push(3)
console.log(array)

//Adding an element at the start of array o(n)
array.unshift(0)
console.log(array)


//removing an element from the starting
array.shift()
console.log(array)

//removing an element from the end
array.pop()
console.log(array)

//Add and remove from specific position
//splice method is use
//Syntax-arr.splice(start,delete,item1,item2,item3......item n)


//To add element from a specific position
let array1=[21,213,432,12,345,453]
array1.splice(1,0,1,2,3)
console.log(array1)

//Removing element from a specific position
array1.splice(1,3)
console.log(array1)
