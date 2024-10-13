//comments
/* multiline comments*/

console.log('javascript');

// variables->to store the data in a memory location
//it should not start with numbers like:1,2,3 etc
//shouldnt contain hyphen -
//cannt be reserved words
//are case sensitive
let name='likhitha';
console.log(name);

let value=2;
value=1.2;
console.log(value);

const value1=3;
console.log(value1);//-->allows the value tosee in console

/* 
 variable can be declared in 3 types var,let,const.
 const cannot be changed
var a = 50;
var a = 60; // Redeclaration is allowed
console.log(a); // 60

let b = 70;
let b = 80; // SyntaxError: Identifier 'b' has already been declared

var: It is function-scoped, meaning it is only accessible within the function it is declared in or globally if declared outside a function. It is not restricted to block scope (like inside if, for, or while blocks).
let: It is block-scoped(like if else it cannt be be accesed outside), meaning it is accessible only within the block (delimited by {}) it is declared in.
*/


let name3='likhitha';//string literal
let age=39;//number literal
let isap=false;//boolean literal
let fn=undefined;//has not defined
let ln=null;//to clear the value of the vairable later we can keep any or nothing is set
//symbol
//objects->key value pairs
let person={
    name:'likhitha',
    age:21
};
person.age=20;
console.log(person);

var a;
console.log(a);//undefined
a=7;
console.log(a);// 7

var b=5;
var c="iam";
b=b+1;//6
c=c+"likhitha";//iam likhitha

var sum=10 +10;//20 similarly sub,mul,div 
sum++;//21
sum--;//20
console.log(sum+" dec");//20

// to print " use \" backward slash for ' -> \',\->\\,\n->newline 
// for string we can use " " or ''

var first="";
var second="bhf";
first=second[0];//b
console.log(first);//b
console.log(second.length);//3
// strings r immutable we cannt change single charcter in string but can change entire string


//arrays-> can store any datatype are mutable
let persons=['likhitha',21];
person[1]=20;//likhitha 20 21
console.log(persons);
console.log(persons[0]);
console.log(persons.length);

var array=[["the",1],["i",2]];
console.log(array[0]+"array");//"the",1 array
console.log(array[0][0]);//the

array.push([1,2]);//"the",1,"i",2,1,2
array.pop();//"the",1,"i",2
array.shift();//"i",2 will remove first index
array.unshift([1,2]);//placing the ements in first index


//functions

function greet(name4){
    console.log('hello'+' '+ name4);
}
greet('likhitha');

function sq(s){
    return s*s;
}
console.log(sq(2));// 2 fun calls occurs here one is sq and that other is consol.log() 


