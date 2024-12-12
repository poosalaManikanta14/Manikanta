// USING WHILE LOOP:-

// TO PRINT 1 TO 10 NUMBERS:-

// var a=1
// while(a<=10){
//     console.log(a)
//     a++
// }


// TO PRINT 10 TO 1 NUMBERS:-
// var a=10
// while(a>=1){
//     console.log(a)
//     a--
// }

// TO PRINT -1 TO -10 NUMBERS:-
// var a=-1
// while(a>=-10){
//     console.log(a)
//     a--

// }

// TO PRINT -10 TO -1 NUMBERS:-
// var a=-10
// while(a<=-1){
//     console.log(a)
//     a++

// }

// TO PRINT EVEN AND ODD NUMBERS:-

// userinput=prompt("enter digit here")
// var a=0;
// while(a<userinput.length){
//     if(userinput[a]% 2==0)
//     console.log(userinput[a],"even")
//     else{
//         console.log(userinput[a],"odd")
//     }
//     a++
// }

// OUTPUT:- if we give userinput as "123456789" it gives
// 1-odd  2-even  3-odd  4-even  5-odd  6-even  7-odd  8-even  9-odd



// TTO PRINT SUM OF EVEN AND ODD NUMBERS:-

// userinput=prompt("enter your digit here.....")
// var sumeven=0;
// var sumodd=0;
// var a=0;
// while(a<userinput.length){
//     if(userinput[a]% 2==0)
//     sumeven += userinput[a]
//     else{
//         sumodd += userinput[a]
//     }
//     a++
// }
// console.log(sumeven,"even")
// console.log(sumodd,"odd")


// FUNCTIONS TASKS:-

function mani(){
    var Hname="manikanta"
    var Mname="dearcomrade"
    var Dname="bharath"
    var singer="sidsriram"
    
    var movie={
        manikanta:Hname,
        dearcomrade:Mname,
        bharath:Dname,
        sidsriram:singer,
    }
    console.log(movie)
}
mani()