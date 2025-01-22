
// ASYNC:-- IT WILL MAKE MY SYNCHORONOUS CODE TO ASYNCHRONOUS CODE../
// >> ASYNC IS A KEYWORD THAT IS USED TO DECLAREE A FUNCTION AAS ASYNCHRONOUS.
// AWAIT:-- IT WILL MAKE THE CURRENT  FUNCTION TO WAIT UNTILL THE PROMISES GIVES THE OUTPUT../..
// >> AWAIT IS A KEYWORD THAT IS USED INSIDE AN ASYNC FUNCTION TO PAUSE THE EXECUTION OF THE FUNCTION UNTILL A PROMISES IS RESOLVED.


// EX-1:-- FUNCTION INVOKING WITHOUT USING AWAIT OPERATOR...

// async function a(){
//     let ticketBook= new Promise ((res,rej)=>{
//      if(1){
//          setTimeout(()=>{
//              console.log
//              ("ticket booked")
//          },2000)
//      }
//     })
//  }
//  a()



// EX-2:-- FUNCTION INVOKING BY USING AWAIT OPERATOR...

// async function a(){
//     let ticketBook=await new Promise ((res,rej)=>{
//      if(1){
//          setTimeout(()=>{
//             console.log
//              ("hello vamsi ticket booked")
//          },1000)
//      }
//     })
//  }
//  a()


// EX-3:-- FETCHING DATA BY USING ASYNC-AWAIT OPERATOR AND JSON FORMAT..

// async function a(){
//     let ticketBook=await fetch("https://fakestoreapi.com/products");
//     console.log(ticketBook);
    
//     let finalData=await ticketBook.json()
//     let dd="vamsi"
    
//     console.log(finalData);
//     console.log(dd);
//  }
//  a()


// EX-4:-- FETCHING DATA BY USING ASYNC-AWAIT OPERATOR ... IN 1ST AWAIT OPERATOR WE ARE NOT USING JSON FORMAT , IN 2ND AWAIT OPERATOR WE ARE USING JSON FORMAT...


async function a(){
    let ticketBook=await fetch("https://fakestoreapi.com/products");
    let ticketBook2=await fetch("https://fakestoreapi.com/products");
    let finalData=await ticketBook
    let finalData2=await ticketBook2.json()
    let dd="allmyData"
    console.log(dd);    
    console.log(finalData);
    console.log(finalData2);

 }
 a()

// EX-5:-- WITHOUT USING ASYNC-AWAIT OPERATOR FETCHING  THE DATA BY USING ONLY FUNCTION KEY..

//  function a(){
//     setTimeout(()=>{
//         let ticketBook= fetch("https://fakestoreapi.com/products")
//         let finalData=ticketBook
//         console.log(finalData)
//        setTimeout(()=>{
//         let ticketBook2= fetch("https://fakestoreapi.com/products")
//         let finalData2= ticketBook2
//         console.log(finalData2)
//         setTimeout(()=>{
//         let dd="allmyData"
//         console.log(dd);   

//         },5000)
//     },4000)
// },2000)
         

//  }
//  a()