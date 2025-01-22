// FILTER METHOD:--

// EX-1
// let a=[1,3,6,9,8,5]
// console.log((a.filter(x => x >= 3 && x % 3 ==0)));
// console.log(a);

// OUTPUT:- [ 3, 6, 9 ]
//          [ 1, 3, 6, 9, 8, 5 ]

// EX-2
// var b = [2,4,8,7,14,18,19]
// console.log((b.filter(x => x > 4 && x%2 == 0)));
// console.log(b)


// OUTPUT:-  [ 8, 14, 18 ]
//           [2,  4,  5,  8,  7, 14, 18, 19]

// EX-3:-
// var c = [4,8,5,16,32,24,36,40,44,52]
// console.log((c.filter(x => x > 20 && x % 4 == 0)));
// console.log(c);

// OUTPUT:- [ 32, 24, 36, 40, 44, 52 ]
//          [4,  8,  5, 16, 32,24, 36, 40, 44, 52]

// EX-4:-
// function Vote(age) {
//     return age >= 18;
// }

// let filtered = [24, 13, 16, 40].filter(Vote);
// console.log(filtered);

// OUTPUT:- [ 24, 40 ]


// EX-5:--

//  let d = [2,3,4,-1,-4,6,-12]
//  console.log((d.filter(x => x > 0)));
//  console.log(d);

//  OUTPUT:- [ 2, 3, 4, 6 ]
//           [2, 3,   4, -1,-4, 6, -12]
 

 
// MAP METHOD:-

//  EX-1:--

//   let a =[1,2,3,4,5,6,7,8]
//   console.log(a.map(x => x*2));
//   console.log(a);

//   OUTPUT:--[2,  4,  6,  8, 10, 12, 14, 16]
//            [1, 2, 3, 4,5, 6, 7, 8]
  
// EX-2:--

// let b = [3,5,7,10,25,15,22,30,35]
// console.log(b.map(x => x*5));
// console.log(b);

// OUTPUT :--   [15, 25,  35,  50,125, 75, 110, 150,175]
//              [3,  5,  7, 10, 25,15, 22, 30, 35]

//  EX-3:--

// let c= [2,4,5,12,7,68,19,20,14]
// console.log((c.map(x => x%2)));
// console.log(c);

// OUTPUT:--    [0, 0, 1, 0, 1,0, 1, 0, 0]
//               [2,  4,  5, 12, 7, 68, 19, 20, 14]


// EX-4:--

//   let d=[3,5,15,23,24,25,77,66,5]
//   console.log((d.map(x => x-4)));
//   console.log(d);


//   OUTPUT:--  [-1,  1, 11, 19, 20, 21, 73, 62,  1]
//              [3,  5, 15, 23, 24,25, 77, 66,  5]
  

// EX-5:--

// let s = [10,22,30,45,50,60,40,55]
// console.log((s.map(x=> x%10)));
// console.log(s);


// OUTPUT:--  [  0, 2, 0, 5,0, 0, 0, 5]
//           [10, 22, 30, 45,50, 60, 40, 55]


// FOREACH METHOD:--
//   EX-1;--
  
// const arr = [1, 2, 3, 4, 5];

// arr.forEach((mani) => {
//     console.log(mani);
// });
// console.log(arr)

// OUTPUT:--
//  1
// 2
// 3
// 4
// 5
// [ 1, 2, 3, 4, 5 ]

// EX-2:-
// const as =[2,3,4,34,33,24,44]
// as.forEach(x => console.log(x%2));
// // console.log(x);

// console.log(as);

// OUTPUT:-- 
// 0
// 1
// 0
// 0
// 1
// 0
// 0
// [2,  3,  4, 34,33, 24, 44]

// EX-3:-
//  let b = [210,20,30,400,550,35,320]
//  b.forEach(x => console.log(x/10));
//  console.log(b);

//  OUTPUT:-- 
//  21
//  2
//  3
//  40
//  55
//  3.5
//  32
//  [210, 20,  30, 400,550, 35, 320]
 
 
// EX-4:-

// let c = [30,10,44,34,28,40,54,60]
// c.forEach(x => console.log(x-10));
// console.log(c);

// OUTPUT:-- 
// 20
// 0
// 34
// 24
// 18
// 30
// 44
// 50


// [30, 10, 44, 34,28, 40, 54, 60]


// EX-5:--
// let eve = [4,30,45,55,32,15,17]
// eve.forEach(great => {
//     console.log(great > 20);
    
// });
// console.log(eve);


// OUTPUT:-- 
// false
// true
// true
// true
// true
// false
// false
// [4, 30, 45, 55,32, 15, 17]

 