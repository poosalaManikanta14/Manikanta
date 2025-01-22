
// WHAT IS API:- API FULL FORM IS AN APPLICATION PROGRAMMING INTERFACE THAT IS A COLLECTION OF COMMUNICATION PROTOCALS AND SUBROUTINES 
// USED BY VARIOUS PROGRAMS TO COMMUNICATE BETWEEN THEM.. 


// "https://  fakestoreapi.  com /   products"
// PROTOCAL  / DOMAIN  /   TOPDOMAIN / ENDPOINTS

// 
// CRUD:- CREATE / READ / UPDATE / DELETE

// >> FETCH:-
//         WHETHER YOU'RE RETRIEVING DATA,SUBMITTING A FORM,OR INTERACTING WITH API'S FETCH API HELPS STREAMLINE THE ENTIRE PROCESS,
//         MAKING YOUR CODE MUCH REDABLE. THE fetch() REQUIRES ONLY ONE PARAMETER WHICK IS THE URL PF THE RESOURCE THAT YOU WANT TO FETCH..

//  >> IT IS USED TO MAKE SOME OPERATIONS ON API ..API

//  IN FETCH THERE ARE FOUR OPERATIONS:--

// 1.PATCH() :- IT IS USED TO UPDATE THE DATA.
// 2.POST():- IT IS USEDTO POST/ADD THE DATA .
// 3.DELETE():- IT IS USED TO DELETE THE DATA.
// 4.GET() :- TO GET THE DATA.


// >> DEFAULT OPERATION OF FETCH() IS GET()..
// >> BY USIN FETCH() IT WILL RETURNS AN PROMISES..


const url = "https://fakestoreapi.com/products";
async function getData(){
    const data= await fetch(url);
    // console.log(typeof data);
    // console.log(data);
    
    // console.log(data.json());
        const response=await data.json()
        console.log(response);

        let APICARD=document.getElementById("APICARDS")
        APICARD.style.display="flex"
        APICARD.style.flexWrap="wrap"
        

        response.forEach(x=>{
            let card=document.createElement("div")
            card.innerHTML=`
            <img src=${x.image} alt="" width=100% height="70%"/>
            <h4>${x.title}<h4/>
            <h4>PRICE:--${x.price}</h4>
            `
            card.style.width="283px";
            card.style.height="390px"
            card.style.backgroundColor="#D7D3BF"
            card.style.margin="10px"
            // card.style.alignContent="center"
            card.style.border="4px solid grey"
            APICARD.append(card)
        })
}
getData()
        



