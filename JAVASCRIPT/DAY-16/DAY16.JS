// let resume1=".pdf";
// let resume2=".doc";
// let uploadResume=prompt("enter resumeName along with extension name: ")

// if(uploadResume.endsWith(resume1) || uploadResume.endsWith(resume2)){
//     alert(" your Resume Application is successfully submitted")
// }else{
//     alert("please use .doc or .pdf resumes only")
// }


let userEmail=prompt("enter your email here")
let userPassword=prompt("enter your password here")
let users=[{email:"mani@gmail.com",password:"mani@1413"},{email:"chintu@gmail.com",password:"chintu@1429"}]
let user=users.find(user=>user.email === userEmail && user.password=== userPassword)
if(user){
    console.log("logged in successfully!!!");
    alert("logged in successfully!!!")
}
else
{
    console.log("no user found!!!");
    alert("no user found!!!!")
}