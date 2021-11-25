let numbers=[56,12,2,23,31,12,4,34,2121,32]

let iterator=numbers[Symbol.iterator]()

console.log(iterator)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next().value)

let entries=numbers.entries();
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)
console.log(entries.next().value)


let keys=numbers.keys();
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())

let values=numbers.values()
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())