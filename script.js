//arithmetic operators//
let a=10;
let b=3;
console.log('using variable and values with arithmetic opetrator');

console.log(a+b);
//Sub
console.log(a-b);
//mul
console.log(a*b);
//div
console.log(a/b);
//modu
console.log(a%b);
//square
console.log(a**3);

//assignement operators
console.log('ASSIGNMENT OPERATORS');
let c=5;
console.log();
 c+=3
 console.log(c);
 
 c=8;
 c-=2
 console.log(c);

 c=6;
 c*=4
 console.log(c);
 
 c=24;
 c/=2
 console.log(c);

 c=12;
 c%=5
 console.log(c);

 //nested ternary
console.log('nested ternary');

 const number=-1;

number<0? console.log('NEGATIVE'):(number===0)?console.log('ZERO'):(number>=1 && number<=10)? console.log('SMALL'):(number>=11 && number<=100)?console.log('MEDIUM'):console.log("LARGE");
