// lets take an array
var arr=[1,2,3,"manikanta",true,["sagar","rahul","revanth"],{name:"chintu", age:22}]

// Write a code snippet to find the length of an array.
console.log(arr.length)
// output: 7

// How do you add an element to the end of an array?
arr.push(undefined)
console.log(arr) 
// output: [1,2,3,'manikanta',true,['sagar','rahul','revanth'],{ name: 'chintu', age: 22 },undefined ]

// How do you remove the last element from an array?
arr.pop()
console.log(arr)
 // output: [1,2,3,'manikanta',true,['sagar','rahul','revanth'],{ name: 'chintu', age: 22 }]

// How do you add an element to the beginning of an array?
arr.unshift("vamsi")
console.log(arr) 
// output: ["vamsi" 1,2,3,'manikanta',true,['sagar','rahul','revanth'],{ name: 'chintu', age: 22 }]

// How can you remove the first element from an array?
arr.shift()
console.log(arr); 
// OUTPUT:- [2,3,'manikanta',true,[ 'sagar', 'rahul', 'revanth' ],{ name: 'chintu', age: 22 }]
  
// How do you reverse the elements in an array?
arr.reverse();
console.log(arr); 
// OUTPUT: [{ name: 'chintu', age: 22 },[ 'sagar', 'rahul', 'revanth' ],true,'manikanta',3,2,1]
  
// How can you find the index of a specific value in an array?
console.log(arr.indexOf("manikanta"))
 // OUTPUT: 3

// How can you check if a certain value exists in an array?
console.log(arr.includes('manikanta')); 
// OUTPUT: true

// How can you sort the elements of an array in ascending order?
console.log(arr.sort()) 
// OUTPUT: [1,2,3,{ name: 'chintu', age: 22 },[ 'sagar', 'rahul', 'revanth' ],'manikanta',true]

// How can you convert an array to a string using commas as separators?
console.log(arr.join(",")) 
//OUTPUT: 1,2,3,manikanta,true,sagar,rahul,revanth,[object Object]

// Write a code snippet that adds an element to the end of an array, then removes the first element.
arr=[1,5,9,"manikanta","sagar"]
arr.push("rahul", "revi")
arr.shift()
console.log(arr); 
//OUTPUT: [ 5, 9, 'manikanta', 'sagar', 'rahul', 'revi' ]

// How can you reverse an array and then join the elements into a string?
a=["s","a","g","a","r"]
console.log(a.reverse().join("")); 
// OUTPUT: ragas

// Write a code that first sorts an array in ascending order, then removes the last element.
var b=[5,33,87,"Mintu","chintu",true,undefined]
b.sort()
b.pop()
console.log(b); 
// OUTPUT: [ 33, 5, 87, 'Mintu', 'chintu', true ]

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var b=[5,33,87,"Mintu","chintu",true,undefined]
b.unshift("manikanta","rahul")
b.shift()
console.log(b.length); 
// OUTPUT: 8

// How do you combine two arrays, sort the combined array, and then remove the last element?
arr1=[1,2,3,"manikanta","rahul"]
arr2=["sagar","revi"]
arr = arr1.concat(arr2)
arr.sort()
arr.pop()
console.log(arr); 
// OUTPUT: [ 1, 2, 3, 'sagar', 'rahul', 'revi' ]

//   1.Guest list

var arr =  ["Alice", "Bob", "Charlie", "David"]
console.log(arr.unshift("maxi"));
console.log(arr.pop());
console.log(arr.includes("Bob"));
console.log(arr);

// OUTPUT - 5
//          David
//          true
//          (4) ['maxi', 'Alice', 'Bob', 'Charlie']


// 2.Generate a sentence:-

var str ="Learn,Practice,Improve"
console.log(str.split("").reverse( ).join(" "));

// OUTPUT- e v o r p m I , e c i t c a r P , n r a e L
 
// 3.create a playlist:-

var a=["Song1", "Song2", "Song3"] 
var b=["Song4", "Song5"]

a=a.concat(b)
a.shift()
a.push("song6")
console.log(a);

// OUTPUT- (5) ['Song2', 'Song3', 'Song4', 'Song5', 'song6']

// 4.fav movies:-

var movies= ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]

movies=movies.slice(1,4).concat(["The Matrix", "The Godfather"]).reverse()
console.log(movies);

// OUTPUT- (5) ['The Godfather', 'The Matrix', 'Interstellar', 'Avatar', 'Titanic']

// 5.sring operations:-

var str=("John,Doe,Jane,Smith")
str=str.split(",")
str1=str.includes("Jane")
console.log(str1);
var str2=str.reverse().join(" ")
console.log(str2);

// OUTPUT-true
//      Smith Jane Doe John

// 6.Length-Based:-

var arr=[1, 2, 3, 4, 5]
arr.shift();
arr.push(6,7);
arr.length;
console.log(arr);

// OUTPUT- (6) [2, 3, 4, 5, 6, 7]

// 7.Shopping cart:-

var arr=["Milk", "Bread", "Eggs", "Butter"]
arr.includes("Eggs");
arr.pop()
arr.push("Cheese,Juice")
console.log(arr);

// OUTPUT- (4) ['Milk', 'Bread', 'Eggs', 'Cheese,Juice']

// 8.Rearrange and combine:-

var a = ["Alice", "Bob", "Charlie"]
var b = ["David", "Eve"]
a = a.reverse().concat(b)
a.unshift("Frank")
console.log(a);

// OUTPUT - (6) ['Frank', 'Charlie', 'Bob', 'Alice', 'David', 'Eve']

// 9.Shopping cart:-

var arr=["Milk", "Bread", "Eggs", "Butter"]
var a = arr.indexOf("Eggs")
arr [a]="Cheese"
arr.unshift("Juice")
console.log(arr);

// OUTPUT- (5) ['Juice', 'Milk', 'Bread', 'Cheese', 'Butter']

