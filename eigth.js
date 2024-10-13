//javascript interacts with html through events

//badway
const secondBtn=document.querySelector(".second-btn");
secondBtn.onclick=function(){
    console.log("web");
}
//great way
//add eventlistener attaches an event handler to an element
const best=document.querySelector(".best");
// function gr(){
//     console.log("hello");
// }
// best.addEventListener("click",gre);

//arrow function
best.addEventListener("click",()=>console.log("yellow"));//when ever u click 
//event obj
const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
e.preventDefault();//=>by default to loads the page in order to load when the submit is clicked this is used
console.log(input.value);});//what ever typed in the input it displays 
