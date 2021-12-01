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

    print(){
        let arr=[]
        let current=this.head;
        while(current!=null){
            arr.push(current.value)
            current=current.next
        }
        return console.log(arr)
    }
}

const Node=new LinkedList(10)
Node.appendAtEnd(20)
Node.appendAtEnd(30)
Node.print()
console.log(Node)