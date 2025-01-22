
// PROMISES:--IT IS AN OBJECT IT WILL TAKE TWO PARAMETERS ONE IS RESOLE AND ANOTHER IS REJECT .
// IN PROMISES IF THE CODE RUN SUCCESSFULLY RESOLVE GET TO BE EXECUTED,IF NOT REJECT GET TO BE EXECUTED.

// >IT HAS THREE STAGES    ,PENDING > FULLFILLED > REJECTED.
// >IN BELOW SYNTAX ARROW FUNCTION(=>) NAMED AS EXECUTOR CONSTRUCTOR.
// >IN BELOW SYNTAX NEW PROMISE NAMED AS PROMISE CONSTRUCTOR (OBBJECT).
// EX:--- PHONE PE ,UBER , ETC


// PROMISES SYNTAX:-

//  const mani = new Promise((resolve,reject)=>{
//     if(1){
//         resolve("successfully exeecuted")
//     }else{
//         reject("not executed")
//     }
//  })
//  console.log(mani)

//  mani.then(output=>console.log(output)
//  ).catch(err=>console.log(err)
//  )



// const a = 23
// const b = 30
// const c = false
// const d = true
// const mani = new Promise((resolve,reject)=>{
//     if(a && b && c && d){
//         setTimeout(()=>{
//             resolve("PAYMENT DONE SUCCESSFULLY")
//         },3000)
//     }else{
//         setTimeout(()=>{
//             reject("SOME TECHNICAL ISSUE")
//         },5000)
// }})

// mani .then(output=>console.log(output)
// ).catch(err=>console.log(err)
// )

// const step1=new Promise((resolve, reject)=>{
//     try{
//         if(1){
//             setTimeout(()=>{
//             resolve("yedo okati rayandi")
//             },2000)
//              }else{
//                 setTimeout(()=>{
//                        reject("failed at step 1")
//                 },2000)
//              }
//     }catch(err){
//                       reject(`error at step1 ${err.message}`);
                      
//     }
// });


// const step2=new Promise((resolve, reject)=>{
// try{
// if(0){
//     setTimeout(()=>{
//     resolve("yedo okati rayandi 2")
//     },2000)
//      }else{
//         setTimeout(()=>{
//                reject("failed at step 2")
//         },2000)
//      }
// }
// catch(err){
// reject(`error at step2 ${err.message}`);
// }
// });



// step1.then(res=>{
// console.log(res)
// return step2;
// }
// ).then(res=>{
// console.log(res)
// return step2;
// // return step3
// })
// .catch(err=>{
// console.log(err);
// })


const step1=new Promise((resolve,reject)=>{
        
            if(1){
                setTimeout(()=>{
                    resolve("successful")
                },2000)
            }else{
                setTimeout(()=>{
                    reject("failed 1")
                },3000)
            }
       
    })
    
    
    
    
    const step2=new Promise((resolve,reject)=>{
       
        if(0){
            setTimeout(()=>{
                resolve("successful 2")
            },2000)
        }else{
            setTimeout(()=>{
                reject("failed 2")
            },3000)
        }
       
    })
    
    
    // step1.then(step2).catch(err=>{
    //     console.log(err);
        
    // })

    step1.then((output1)=>{
        console.log(output1)
        return step2
    }
    ).then(res=>{
        console.log(res)
    })
    
    .catch(err=>console.log(err)
    )
    
    // promise chaining:-- IT ALLOWS MULTIPLE ASYNCHRONOUS OPERATIONS TO RUN IN SEQUENCE AND REDUCES THE CALL
    
    
    
    // step1.then((output1)=>{
    //     console.log(output1)
    //     // return console.log(step2);
    //     return step2;
    // }
    // ).then((res)=>console.log(res))
    // .catch((err)=>console.error(err)
    // )
    
    


