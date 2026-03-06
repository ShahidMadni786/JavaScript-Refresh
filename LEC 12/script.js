//All about event lisnter 
let change = document.getElementById('clickwala');

change.addEventListener('click',()=>{
   let newelemnt = document.createElement('h1');
   newelemnt.textContent = "Han G ye hi jadu"
   newelemnt.style.cssText ='color:red;';
   change.appendChild(newelemnt);

})

// let para = document.querySelectorAll('.para');
// para.addEventListener("click",()=>{
//    alert("uu have click on : ", event.target.textContent)
// })