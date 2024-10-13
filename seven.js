//creating element
const h1=document.createElement("h1");//to create a element
const body=document.body;
h1.textContent="Hellooo";
h1.classList.add("u");
console.log(h1.textContent);
body.appendChild(h1);

//insert before
const ul=document.querySelector("ul");
const newli=document.createElement("li");
newli.innerText="hi";
ul.appendChild(newli);

const firstli=document.querySelector("li");
ul.insertBefore(newli,firstli);

// insert
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "I'm italics";
// i.style.color = "skyblue";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i); 
// firstP.insertAdjacentElement("beforeend",i);
// firstP.insertAdjacentElement("afterend",i);

//append
let section=document.querySelector("section");
const i = document.createElement("i");
i.innerText = "I'm italics";
i.style.color = "skyblue";
const span = document.createElement("span");
span.innerText = "HuXn";
span.style.color="crimson";
section.append(i,span);//prints at the end
section.prepend(i,span);//prints before

