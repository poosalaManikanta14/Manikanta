// syntax for switchcase:-

// switch(expression/value){
//     case 1:-
//     code to execute;
//     case 2:-
//     code to execute;
//     case 3:-
//     code to execute;
//     cse 4:-
//     code to execute;
//     default;
//     code to execute;

// }


// example:-greetings

// var a=prompt("enter your greeting here")
// switch(a){
//     case "morning":
//         console.log("have a Great morning & have a good day");
//         break;
//         c9ase "afternoon":
//             console.log("enjoy your great afternoon,with a bright sunny weather");
//             break;
//             case "evening":
//                 console.log("enjoy your evening by playiing cricket with your friends");
//                 break;
//                 default:
//                     console.log("no greetings there.thankyou");
                    
// }


// Example:-WeekDays

// var week=prompt("enter day here")
// switch(week){
//     case "monday":
//         console.log("om namah shivaya");
//         break;
//         case "tuesday":
//             console.log("jai hanuman");
//             break;
//             case "wednesday":
//                 console.log("swami sharanam");
//                 break;
//                 case "thursday":
//                     console.log("om sai ram");
//                     break;
//                     case "friday":
//                         console.log(" saraswathi devi ");
//                         break;
//                         case "saturday":
//                             console.log("om namoh venkateshwara");
//                             break;
//                             default:
//                                 console.log("HAPPY SUNDAY");
// }

// Example:- Dashboard

var Dashboard=prompt("enter your requirement here")
switch(Dashboard){
    case "notes":
        console.log("your required notes are here,please go ahead");
        break;
        case "classroom":
            console.log("your regular class recordings are here,go and revise it");
            break;
            case "attendance":
                console.log("your regularity to the clasees are recorded here");
                break;
                case "feedback":
                    console.log("go and check your feedbacks that given by your lectures");
                    break;
                    case "projects":
                        console.log("your projects are going to submit here");
                        break;
                        case "interviewprep":
                            console.log("recorded vedios for your interview prep are here go on ,all the best");
                            break;
                            default:
                                console.log("your are in the HOME page");
}
