// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");


input.addEventListener("keypress",()=>{
    console.log("key pressed");
});

 input.addEventListener("keyup",()=>{
    console.log("key pressed");
 });

 input.addEventListener("keydown",()=>{
    console.log("key pressed");
 });


input.addEventListener("keypress",(e)=>{
    console.log(e.charCode);//give the ascii value of the char
    console.log(e.code);//give the enterd char
    console.log(e.ctrlKey);//if ctrl is pressed it will give true else false
    console.log(e.shiftKey);//similar to ctrlkey
})