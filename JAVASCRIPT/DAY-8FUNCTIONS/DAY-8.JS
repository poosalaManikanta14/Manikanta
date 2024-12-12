// SYNTAX FOR FUNCTIONS

// funtion Mani(){
//     code to execute
// }
// mani()    // invoking or calling
//  if we call the function n number of times it will give the output as  n number of times. 

// Example:-

// function add(){
//     var a="apple"
//     var b="bat"
//     var c="cat"
//     var d="dog"

//     var e={
//         apple:a,
//         bat:b,
//         cat:c,
//         dog:d,
//     }
//     console.log(e);
    
// }
// add()
// add()



                               //   PROBLEM SOLVING
                    // SOLVING COMPLEX PROBLEMS EASILY ,ACCURACY.

//  EVEN AND ODD DIGITS:-

// userinput=prompt("enter your digit here")
// for(i=0; i<userinput.length; i++){
//     if(userinput[i]% 2==0)
//         console.log(userinput[i],"even")
//     else{
//         console.log(userinput[i],"odd")
//     }
// }

// SUM OF EVEN AND ODD DIGITS:-

userinput=prompt("enter your digit here")
var sumeven=0;
var sumodd=0;
for(a=0; a<userinput.length; a++){
    if(userinput[a]% 2==0)
        sumeven += userinput[a]
    else{
        sumodd += userinput[a]
    }
}
console.log(sumeven,"even");
console.log(sumodd,"odd");


// PRODUCT OF EVEN AND NUMBERS:-

// userinput=prompt("enter your digit here")
// var sumeven=1;
// var sumodd=1;
// for(b=0; b<userinput.length; b++){
//     if(userinput[b]% 2==0)
//         sumeven *=userinput[b]
//     else{
//         sumodd *=userinput[b]
//     }
// } 
// console.log(sumeven,"even");
// console.log(sumodd,"odd");

