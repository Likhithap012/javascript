 //to access dom elements

 console.log(document.getElementsByTagName("h1"));
 console.log(document.getElementsByTagName("h1").length);
 console.log(document.getElementById("main"));//similar for class ->byclass
 console.log(document.querySelector(".cls"));//to selcect the tag simply guve the name has h1,for class.,for id # followed by name
 // selects only first one with that class name
 console.log(document.querySelectorAll(".cls"));//to selcect the all the class with name cls
 console.log(document.querySelectorAll("li").length);
 //storing variables
const h1=document.querySelectorAll("li");
console.log(h1);
