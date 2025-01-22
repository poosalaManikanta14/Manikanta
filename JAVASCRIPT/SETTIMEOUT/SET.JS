// SETTIMEOUT:- The setTimeout() function is used to add delay or scheduling the execution of a specific function after a certain period.
//  It’s a key feature of both browser environments and Node.js, enabling asynchronous behavior in code execution.


// DRAWBACKS:-
// 1.IT IS HARD TO DEBUG THE CODE .
// 2.TI IS COMPLEX TO READ AND UNDERSTAND.
// 3.DIFFICULT TO READ THE CODE .
// *THESE THREE ARE SAID TO BE "CALL BACK HELL"
// *PYRAMID OF CODE (HORIZONTAL LINES OF CODE)


// STYNTAX:-

setTimeout(()=>{
        console.log("a function");
    },2000
)


// SETTIMEOUT WITH ASYNC BEHAVIOUR:-

// EX:-ORDERING AN PRODUCT 

setTimeout(()=>{
    alert("ORDER SUCCESSFULLY DONE")
},3000)
setTimeout(()=>{
    alert("SHIPPING OF YOUR ORDER IS DONE")
},6000)
setTimeout(()=>{
    alert("REACHED TO NEAREST HUB")
},9000)
setTimeout(()=>{
    alert("THE DELIVERY PERSON IS PICKED YOUR ORDER")
},12000)
setTimeout(()=>{
    alert("YOUR ORDER IS IN YOUR HANDS SAFELY")
},15000)
setTimeout(()=>{
    alert("PAYMENT DONE SCUSSEFULLY,THANK YOU....")

},18000)


// IN THIS IF WE DIDN'T GIVE PROPER TIME INTERVALS IT WILL NOT GIVE US PROPER OUTPUT IT WILL 
// MISSMATCH OUTPUT AS FIRST TO LAST LAST TO FIRST BASED ON TIME INTERVALS. 


// EX:-ORDERING AN PRODUCT BY NESTED CALL BACK FUNCTION


setTimeout(()=>{
    alert("ORDER DONE SUCCESSFULLY")
    setTimeout(()=>{
        alert("SHIPPING YOUR ORDER IS DONE")
        setTimeout(()=>{
            alert("REACHED TO NEAREST HUB")
            setTimeout(()=>{
                alert("THE DELIVERY PERSON IS PICKED YOUR ORDER")
                setTimeout(()=>{
                    alert("YOUR ORDER IS IN YOUR HANDS")
                    setTimeout(()=>{
                        alert("PAYMENT DONE SUCCESSFULLY.THANK YOU.....")
                    },12000)
                },10000)
            },8000)
        },6000)
    },4000)
},2000)


// BY USEING NESTED CALL BACK FUNCTION IT WILL GIVE US AN PROPER OUTPUT WHEN THE TIME INTERVALS ALSO MISMATCH.
// IT WILL WAIT UNTILL THE FIRST ALERT TO BE EXECUTED AND AFTER THE NEXT ALERTS ARE  TOO BE EXECUTED.
// BUT SOME DRAWBACKS OCCCURS NAMED AS PYRAMID DOME ALSO  CALLED AS HORIZONTAL SCROLLLING.  