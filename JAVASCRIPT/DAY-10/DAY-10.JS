// let a=+prompt("enter digit here");
// let count=0;

// for(i=1;i<=a;i++){
//    if(a % i==0){
//         count++
//    }
// }
// if(count==2){
//        console.log(a , "is prime")
//     }else{
//         console.log(a , "is not prime")
//     }



let a=+prompt("enter digit here");
let count=0;

if(a>=1){
    for(i=1;i<=a;i++){
        if(a % i==0){
             count++
        }
    }
    
if(count==2){
    console.log(a , "is prime")
 }else{
     console.log(a , "is not prime")
 }
    
}else{
    console.log(a,"is lessthan 1 and equal to 1 so not prime");
   
}


