//Important Array Functions

//concat-join multiple array and return a copy of joined array
let positive=[1,2,3]
let negative=[-3,-2,-1]
console.log(negative.concat(0,positive))

//every- iterates each elements of an array until the return of function is false
let numbers=[2,4,5,1,6,7,8,9,10,12]
let isEven=(number)=>{
    console.log(number)
    return (number%2===0)?true:false;
}
console.log(numbers.every(isEven))

//some-iterates each elements of an array untill the return of function is TRUE.
console.log(numbers.some(isEven))

//foreach-iterates each and every elements no matter what 
numbers.forEach(element => {
    console.log(element%2===0)
});

//map-creates new array from a function and return all elements with the specific condition
let result=numbers.map((a)=>{
    return a%2===0?a:false;
})

console.log(result)

//filter-creates new array with each element that evaluates TRUE in the function provided.
let result1=numbers.filter(element=>{
    return element%2===0;
})

console.log(result1)

//join-joins all elements into string
console.log(numbers.join(''))

//reverse-reverse the array
console.log(numbers.reverse())

//sort- sort the array alphabetically
console.log(numbers.sort((a,b)=>{
    return a-b
}))

//slice- returns new array from specific index
console.log(numbers.slice(3))
console.log(numbers.slice(3,5))

//indexOf and lastIndexOf- returns the index

//toString-returns the array as string
console.log(numbers.toString())
console.log(typeof numbers.toString())

//valueOf-returns array as a string
let name="Mohammad saiful hasan"
console.log(name.valueOf())