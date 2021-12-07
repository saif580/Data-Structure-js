class stack{
    constructor(){
      this.array=[];
    }
    peek(){
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const mystack=new stack();
  mystack.push('google');
  mystack.push('Facebook');
  mystack.push('Twitter');
  mystack.pop();
  console.log(mystack)
  // mystack.peek();