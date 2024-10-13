//getting attribute
const a=document.querySelector('a');
console.log(a.href);
console.log(a.href="www.youtube.com");// we can change like this

const input=document.querySelector('input');
console.log(input.value);//to get the value of input
console.log(input.type);//it gives the type of input

//setting attribute
a.href="https://www.youtube.com";//it changes the link
console.log((input.value="Bye"));
console.log((input.type='password'));
console.log((input.placeholder='enter password'));
 
//getattribute->allows to get the attribute from the element
console.log(input.getAttribute("type"));

//setattribute
input.setAttribute("type","password");//sets to the password



