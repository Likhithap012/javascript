//to get the parents
let firstli=document.querySelector("li");
console.log(firstli.parentElement);//first parent of li which is ul
console.log(firstli.parentElement.parentElement);//gives section which is body
console.log(firstli.parentElement.parentElement.parentElement);//gives html

//to get children
 let ul=document.querySelector("ul");
 console.log(ul.children);
 console.log(ul.children[0]);
 console.log(ul.children[1]);
 console.log(ul.children[2]);
 console.log(ul.children[3]);
 console.log(ul.children[0].innerText="one");

//siblings
let sl=document.querySelector("li");
console.log(sl.nextElementSibling.textContent);
console.log(sl.nextElementSibling.nextElementSibling.textContent);

//prv element sibling
let ps=document.querySelector(".fourth");
console.log(ps.previousElementSibling);