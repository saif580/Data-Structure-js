let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(arr.sort((a,b)=>{
    return a-b
}))

function compare(a,b){
    if(a<b){
        return -1
    }
    if(a>b){
        return 1
    }
    if(a==b){
        return 0
    }
}

console.log(arr.sort(compare))

let arrstring=["saif","arpit","nitin","anubhav","irfan","terminator"]

console.log(arrstring.sort().join(' '))
console.log(arrstring.sort().toString())
console.log( typeof arrstring.sort().toString())