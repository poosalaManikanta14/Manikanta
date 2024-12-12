// // STRING METHODS TASKS------


// QUE-1:-

var str1="    manikanta"
var str2="poosala    "
str1=str1.trimStart()
str2=str2.trimEnd()
console.log(str1.concat(str2).toUpperCase())

// // OUTPUT:- MANIKANTAPOOSALA


// QUE-2:-

var str="POOSALAMANIKANTA"
str=str.slice(7,11)
console.log(str.length-1);
console.log(str.toLowerCase());

// // OUTPUT:- 3 / mani


// QUE-3:-

var char="S"
var a=char.concat("sagar")
a=a.toUpperCase()
console.log(a.slice(-2,-1))

// // OUTPUT:- A

// QUE-4:-

var str1="vamshi"
var str2="Krishna"
str1=str1.slice(0,3)
str2=str2.slice(-3)
var str12= str1.concat(str2)
console.log(str12);
var str22=str12.at(0).toUpperCase()+str12.slice(1,str12.length-1).toLowerCase()+str12.at(str12.length-1).toUpperCase()
console.log(str22);


// OUTPUT:- VamhnA

// QUE-5:-

var astr= "        REVANTH      "
var bstr=astr.trim();
var cstr=bstr.at(0).toUpperCase()+bstr.slice(1,bstr.length-1).toLowerCase()+bstr.at(bstr.length-1).toUpperCase()
console.log(cstr);
cstr=cstr.slice(2,5)
console.log(cstr);
var dstr=cstr.concat("vehicle")
console.log(dstr);


// OUTPUT:- vanvehicle
// OUTPUT :- RevantH



// QUE-6:-

var hello = "hello there , how are you"
hello=hello.split(" ")
hello=hello.indexOf("are")
console.log(hello);

// // OUTPUT:- 4



// // OBJECT METHODS TASKS-----

// QUE-1:-

var person = { firstname:"Mani",lastname:"Poosala", age:22}
console.log(person.firstname);
person.city="hyderabaderabad"
console.log(person);

// // OUTPUT:-- 

//     // Mani
//     // { firstname: 'Mani', lastname: 'Poosala', age: 22, city: 'hyderabaderabad' }

// QUE-2:-

var product={name:"SAMSUNGS24",price:"150000",instock:true}
product.price="170000"
delete product.instock
console.log(product);

// // OUTPUT:-- { name: 'SAMSUNGS24', price: '170000' }

// QUE-3:-

var library={fantasy:["HTML","CSS"],mystery:["JAVA","PYTHON"]}
library.scienceFiction=["REACT","NODE.JS"]
console.log(library.fantasy[0]); 
 // OUTPUT: HTML
delete library.mystery
console.log(library);
// OUTPUT: { fantasy: [ 'HTML', 'CSS' ], scienceFiction: [ 'REACT', 'NODE.JS' ] }

// QUE-4:-

var user={username:"manikanta",email:"manikantapoosla@gmail.com", address:{city:"hyderabad",state:"Telangana",zipcode:500027}}
Object.freeze(user)
user.email="manikanta1413@gmail.com"
console.log(Object.isFrozen(user)); // OUTPUT: true
user.phone=6304880563
console.log(user);
// OUTPUT: no Change -- {username: 'manikanta',email: 'manikantapoosla@gmail.com',address: { city: 'hyderabad', state: 'Telangana', zipcode: 500027 }}

// QUE-5:-

var car={make:"tata" , model:"nexon", price:2000000}
Object.seal(car)
delete car.make
console.log(Object.isSealed(car));//OUTPUT: true
car.price=1500000
console.log(Object.isExtensible(car)); //OUTPUT:- False
console.log(car);

//OUTPUT: { make: 'tata', model: 'nexon', price: 1500000 }




