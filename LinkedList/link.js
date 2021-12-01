class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  appendAtEnd (value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
  }

  appendAtStart (value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }

  removeFromStart () {
    this.head = this.head.next
    this.length -= 1
  }
  removeFromEnd () {
    //First Method
    // let temp = this.head
    // let prevElem
    // while (temp != this.tail) {
    //   prevElem = temp
    //   temp = temp.next
    // }
    // prevElem.next = null
    // this.tail = prevElem
    //Second Method
    let current = this.head
    for (let i = 0; i < this.length - 2; i++) {
      current = current.next
    }
    current.next = null
    this.tail = current
    this.length -= 1
  }

  appendAtGivenPosition(pos,value){
    const newNode={
        value:value,
        next:null
    }
    if(this.head.value===undefined){
        this.head=newNode
        this.tail=this.head
        this.length+=1
    } else  if(pos>=this.length){
        this.appendAtEnd(value)
    } else {
        let preValue=this.iterateInLinkList(pos-1)
        let currValue=this.iterateInLinkList(pos)
        preValue.next=newNode
        newNode.next=currValue
        this.length+=1
    }
  }

  iterateInLinkList(pos){
      let current=this.head;
      for(let i=0;i<pos;i++){
        current=current.next
      }
      return current
  }

  print () {
    let arr = []
    let current = this.head
    while (current != null) {
      arr.push(current.value)
      current = current.next
    }
    return console.log(arr)
  }
}

const Node = new LinkedList(10)
Node.appendAtEnd(20)
Node.appendAtEnd(30)
Node.appendAtEnd(40)
Node.appendAtEnd(50)
Node.appendAtStart(0)
// Node.removeFromStart()
// Node.removeFromEnd()
Node.appendAtGivenPosition(3,25)
Node.print()
console.log(Node)
