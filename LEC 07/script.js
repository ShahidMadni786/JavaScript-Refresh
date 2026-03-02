//Hoisting
//this is a process which shift the the scope of variable declaration and function decalaration
//to the top 
//here is example

myname("Shahid")

function myname(name){
    console.log(name);
    
}
// this shows thaat normal function by function keyword we are making is working on the concept of hoisting rather the
//arrow function
// let myname = (name)=>{
//     console.log(name);
    
// }
console.log(age);

var age = 25;
//it will tell undefine so yhe variable decalarion move to the top but its value doesnt
//this is variable hositing and it is only pssible in var keyword variable declaration

//call stack or callback
function fullname(greet, fname){
    console.log("my name is : ", fname);
    greet()
    
}
function greet(){
    console.log("hello g kaisy ho greetings");
    
}
fullname(greet, "Shahid Madni")