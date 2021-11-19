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