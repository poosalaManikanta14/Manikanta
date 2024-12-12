//      // SCOPES

// // 1. 
// function A(){
//     var a="MANI"
//     console.log(a);    
// }
// A()
 
// OUTPUT:- MANI

// 2.
// var a=100;
// function mani(){
//     console.log(100+a);
// }
// console.log(a)
// mani()

// OUTPUT:- 100 ,200

// // 3.
// function A(){
//     function B(){
//         var x=200
//         function C(){
//             console.log(300+x);
//         }
//         C()
//     }
//     B()
// }
// var x=300;
// A()
// console.log(x);

// OUTPUT:- 500,300

// // 4.

// var D=300;
// function E(){
//     function F(){
//         console.log(200+D)
//     }
//     F()
// }
// D=200
// E()
// console.log(D)

// OUTPUT:- 400 ,200

// // 5.

// var a=100;
// function b(){
//     function c(){
//         var a=200;
//         function d(){
//             console.log(a-100)
//         }
//         d()
//     }
//     c()
// }
// a=300
// b()
// console.log(a)

// OUTPUT:- 100,300



//         // PROBLRM SOLVING - 2

// // HIGHEST ORDER OF A NUMBER:-

// userinput=prompt("enter your digit")
// var max=userinput[0];
// for(i=0;i<userinput.length;i++){
//     if(max<userinput[i]){
//         max = userinput[i]
//     }
// }
// console.log(max,"is highest number");

// OUTPUT:- IF WE GIVE USERINPUT "123456"  IT GIVES HIGHST NUMBER = "6"

// // lowest order of a number:-

// userinput=prompt("enter your digit")
// var min=userinput[0];
// for(i=0;i<userinput.length;i++){
//     if(min>userinput[i]){
//         min = userinput[i]
//     }
// }
// console.log(min,"is lowest number");

// OUTPUT:- IF WE GIVE USERINPUT AS "1234" IT GIVES LOWEST NUMBER ="1"

  
// // MAX AND MIN NUMBER:-

// userinput=prompt("enter digit here")
// var max = userinput[0]
// var min = userinput[0]
// for(i=0; i<userinput.length; i++){
//     if(min>userinput[i]){
//         min = userinput[i]
//     }
//     if(max<userinput[i]){
//         max = userinput[i]
//     }
// }
// console.log(min,"is lowest number");
// console.log(max,"is highest number");
// console.log(Number(min)+Number(max));

// OUTPUT:- IF WE GIVE USERINPUT "12345678" IT GIVES OUTPUT AS
            // "1" = IS LOWEST Number
            // "8" = IS HIGHEST Number
            // "9" = AS MIN + MAX


