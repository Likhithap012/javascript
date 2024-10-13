const h1=document.querySelector('h1');
console.log(h1.classList);//gives list of classes in h1 element
// if there is no class we can add the class to element as follows
h1.classList.add('cls2');
console.log(h1.classList);
//to remove the classes form that elements
h1.classList.remove('cls2');
//toggle ->if we hv the class it will remove it if we dont have it it will add
h1.classList.toggle('applw');//it will add it has it is not present
h1.classList.toggle('styles');//removes it as it is not present


