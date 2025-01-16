
// QUE-1:-Write a program where you  need to log the all products data.


// let url='https://dummyjson.com/products'
// async function getdata() {
//     let data1=await fetch(url)
//     let result=await data1.json()
//     console.log(result);
//     result.products.forEach((x)=> {
//         let container=document.createElement("div")
//         let data=`id:${x.id}
//         title:${x.title}
//         description:${x.description}
//         category:${x.category}
//         price:${x.price}
//         rating:${x.rating}`
//         container.innerHTML=`<p>${data}</p>`
//         document.body.appendChild(container)
        
//     });
    
    
// }
// getdata()


// QUE-2:-- Write a program where you need to log single product data

//  let url = "https://dummyjson.com/products/1"
//  async function getdata() {
//     let data = await fetch(url)
//     let res = await data.json()
//     console.log(res);
    
    
//  }
// getdata()


// QUE-3:--  Write a program where you need to log all categories list in the api

// let url='https://dummyjson.com/products'
// async function getdata() {
//     let data1=await fetch(url)
//     let result=await data1.json()
//     console.log(result)
     
//      result.products.forEach((x) => {
//         console.log(`category:${x.category}`);
        
        
//      });

// }getdata()



// QUE-4:-- Write a program to sort the elements in the array based on the title 

// let url="https://dummyjson.com/products?sortBy=title"
// async function getdata(){
//     let data=await fetch(url)
//     let res=await data.json()
//     console.log(res)
// }getdata()


// let url='https://dummyjson.com/products'
// async function getdata() {
//     let data1=await fetch(url)
//     let result=await data1.json()
//     console.log(result)
     
//      result.products.forEach((x) => {
//         console.log(`title:${x.title}`);
        
        
//      });

// }getdata()


// QUE-5:- Write a program to sort the elements in the array based on the title and asc order


// let url="https://dummyjson.com/products?sortBy=title&order=asc"
// async function getdata(){
//     let data=await fetch(url)
//     let res=await data.json()
//     console.log(res)
// }getdata()


// QUE-6:--  Write a program to get the products  based on specific category ( ex. Mobiles, watches like that )

// let url="https://dummyjson.com/products/category/smartphones/"
// async function getdata(){
//     let data=await fetch(url)
//     let result=await data.json()
//     console.log(result);
    
// }getdata()


    // QUE-7:--Write a program to write to get all the quotes in the same api link

//     let url="https://dummyjson.com/quotes"
//     async function getData(){
//     const data= await fetch(url)
//     const res=await data.json()
//     console.log(res)
//     res.quotes.forEach((x) => {
//         let container=document.createElement("div")
//         container.innerHTML=`<p>
//         "${x.quote}"<p>`
//         document.body.appendChild(container)
//       });
// }
// getData()


// QUE-8:-- Write a program to get single quote

// DOUBT
let url="https://dummyjson.com/quotes"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    res.quotes.forEach((x,index)=>{
        if(index-0<1){
            let container=document.createElement("div")
            container.innerHTML=`<p>
        "${index+1}:"${x.quote}"</p>`
        document.body.appendChild(container)
        }
    })
}
getdata()




// QUE-9:-- Write a program to get only 10 quotes in console (limit the range )


// let url="https://dummyjson.com/quotes"
// async function getdata(){
//     let data=await fetch(url)
//     let res=await data.json()
//     res.quotes.forEach((x,index)=>{
//         if(index-1<9){
//             let container=document.createElement("div")
//             container.innerHTML=`<p>
//         "${index+1}:"${x.quote}"</p>`
//         document.body.appendChild(container)
//         }
//     })
// }
// getdata()


// QUE-10:-- Write a program to get all the recipes in console

// let url="https://dummyjson.com/recipes"

// async function getdata(){
//     let data = await fetch(url)
//     let result = data.json()
//     console.log(result);
    
// }getdata()


// QUE-11:--  Write a program to sort the recipe based on the meal-type

// let  url="https://dummyjson.com/recipes/meal-type/snack"
// async function getdata() {
//     let data=await fetch(url)
//     let result = data.json()
//     console.log(result);
    
    
// }getdata()