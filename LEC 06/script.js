//Arrays and Objects
//jS objects

let obj ={
    'name'  : "Love",
     'roll' : 'S23BDOCS1M01149',
     greet : function myfunc(){
        console.log("hell ohi");
        
     }
}
for(let key in obj){
  console.log(key);
  
}
console.log(obj);
obj.greet()

//ARRAYS

let arr =[2,3,5,"Shahid", "Madni"]
console.log(arr);
console.log(arr[4]);
arr.push("Shoaib");
console.log(arr);

// arr.pop();
console.log(arr.join());
arr.shift();
console.log(arr);
arr.unshift("Agya hon pehly per");
console.log(arr);

console.log(arr.slice(1,3));
//slice method main jo argument deingy wo indices hongy ek start index ek end aur end wala count nhi hoga
//aur baqi jahan sy start kiye wo hongy
arr.unshift("agya tu jawan ho kar ", 22,786);
console.log(arr);

arr.splice(1,3,true);
console.log(arr);
//map method 
let brr = [10,11,12,13]
let arraymap = brr.map((num)=>{
       return num**num
})
console.log(arraymap);
//now filter method

let crr = [1,2,22,454,"Shahid" , " Madni"]
let ArrayFilter = crr.filter((val)=>{
      if(typeof(val)=== "number"){
        return true
        
      }
})
console.log(ArrayFilter);
//filter method sy array ek andar specific data pe koi bhi logical filter perform kar skty hain 
// sort
let drr = [99,2,11,55,];
drr.sort((a,b)=>{
  return a-b
})
console.log(drr);
//similarly we can do descending order by b-a


//for each method
let frr = ["Shahid", " bHai hai mera", "madni bhi"];
let ansforeach = frr.forEach((value)=>{
    result = value + "Super heroo bhi hai";
    console.log(result);
    
})
console.log(ansforeach);


