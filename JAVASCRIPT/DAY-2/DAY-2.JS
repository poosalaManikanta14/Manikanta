
// FOR LOOP:-

// var arr=["vamsi","mani","sagar"];
// for (var b=0; b<arr.length; b++){
//     console.log(arr[b])
// }

// OUTPUT:- vamsi
//          mani
//          sagar
  
//   Reverse of array:-

// var arr=["vamsi","mani","sagar"];
// for (var b=arr.length-1; b>=0; b--){
//     console.log(arr[b])
// }

// OUTPUT:- sagar 
//          mani 
//          vamsi

// sum of even and odd Numbers:-



var b=[2,3,4,5,6,7,8,9]
var sumeven=0;
var sumodd=0;
for (var i=0 ; i<b.length ; i++){
    if (b[i]% 2==0){
        sumeven = sumeven+b[i]
    }else{
        sumodd = sumodd+b[i]
    }
}




