let setA=new Set();
let setB=new Set();
setA.add(1)
setA.add(2)
setA.add(3)

setB.add(3)
setB.add(4)
setB.add(5)

console.log(setA)
console.log(setB)

//getting values
console.log(setA.values())

//Getting size 
console.log(setA.size)

//checking values
console.log(setA.has(2))

//Union operation
function union(setA,setB){
    let unionSet=new Set();
    for(let i of setA){
        unionSet.add(i)
    }
    for(let i of setB){
        unionSet.add(i)
    }
    return console.log(unionSet)
}
union(setA,setB)

//Intersection operation
function intersection(setA,setB){
    let intersectionSet=new Set()
    for(let i of setA){
        if(setB.has(i)){
            intersectionSet.add(i)
        }
    }
    return intersectionSet
}
console.log(intersection(setA,setB))

//Difference operation
function difference(setA,setB){
    let differenceSet=new Set()
    for(let i of setA){
        if(!setB.has(i)){
            differenceSet.add(i)
        }
    }
    return differenceSet
}
console.log(difference(setA,setB))

//subset operation
function subset(setA,setB){
    if(setA.size>=setB.size){
        return "Set A is not the subset of Set B"
    }
    for(let i of setA){
        if(!setB.has(i)){
            return "FALSE"
        }
    }
    return "set A is the subset of Set B"
}
console.log(subset(setA,setB))