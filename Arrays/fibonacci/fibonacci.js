let a=0;
let b=1;
let sum=0;
console.log(a)
console.log(b)

for(let i=2;i<=20;i++){
    sum=a+b;
    console.log(sum );
    a=b
    b=sum
}


let fib=[];
fib[1]=1;
fib[2]=1;

for(let i=3;i<20;i++){
    fib[i]=fib[i-1]+fib[i-2]
}

for(let i=0;i<fib.length;i++){
    console.log(fib[i])
}