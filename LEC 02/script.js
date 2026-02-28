var age = 25;
if(true){
    console.log(age)
}
//this is telling that the var we are using to define the variable is a global scope 
// now using it in a blocked scope or function scoped 

function add(a,b){
   
    var c =a+b;
    console.log(c);
    
}
add(5,6);
console.log(c);

// this means that if i now  want to print the value of c it will return undefine because the var c is 
//basically defined in a function and when we want to access it out of the block it is not accesible 
//because now its scope has been changed
//var can be re declared also re assign 
// we dont use var now a days

// here we go to the let keyworrd for assigning or defining the variable 
//let & const came 2015 in ES6 basically is Block scoped
{
  let myname = " Shahid Madni";
  console.log(myname);
  

}
//let cant be redecaled as of var thats why we prefer it over var 
//but simply we can re assign this is simple 
//const means contant value cant be changed

const myage = 25;
     myage = 18;
     //error here we cant re assign or re declare 