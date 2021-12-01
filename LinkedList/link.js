class LinkedList {
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1
    }

    appendAtEnd(value){
        const newNode={
            value:value,
            next:null
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length+=1;
    }
}

const Node=new LinkedList(10)
console.log(Node)