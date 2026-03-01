//Functions Arrow and Plain Functions
function greeting(){
    console.log(" heloo g kaisy hain ap");
    
}
greeting();

function add(a,b){
 let c=a+b;
    return c
}

result = add(3,4);
console.log(result);

let myfullname = (fname,lname)=>{
       let fullName = fname + " " +lname;
       return fullName
}
console.log(myfullname("Shahid", 5));
