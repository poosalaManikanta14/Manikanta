// var savedata = (function () {
//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style.display = "none";
//     return function (f, t) {
//         (blob = new Blob([t], {
//             type: "octet/stream",
//         })),
//             (url = window.URL.createObjectURL(blob));
//         a.href = url;
//         a.download = f;
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };
// })();

// function loadteamfile(i) {
//         var file;
//         var s = document.createElement("input");
//         s.setAttribute("type", "file");
//         s.onchange = function (e) {
//             file = e.target.files[0];
//             var reader = new FileReader();
//             reader.onload = function (event) {
//                 var contents = event.target.result;
//                 try {
//                     var teamcontents = JSON.parse(contents);
//                     loadteamcontents(teamcontents,i);
//                 } catch(e) {
//                     alert("The loaded file is either corrupted or invalid JSON.");
//                 }
//             };
//             reader.readAsText(file);
//         };
//         s.click();
// }

// function saveteamdetails(i) {
//     var fields_id = "team";
//     fields_id += i;
//     var namefield = fields_id;
//     namefield += "name";
//     var teamname = document.getElementById(namefield).value;
//     fields_id += "player";
//     var teammembers = [];
//     for(var j = 0; j < 11; j++) {
//         var playerfield = fields_id;
//         playerfield += (j+1);
//         teammembers.push(document.getElementById(playerfield).value);
//     }
//     var t = {
//         "team_name": teamname,
//         "team_members": teammembers
//     }
//     var s = JSON.stringify(t);
//     var filename = "team";
//     filename += teamname;
//     filename += ".json";
//     savedata(filename, s);
// }

// function loadteamcontents(t,i){
//     var fields_id = "team";
//     fields_id += i;
//     var namefield = fields_id;
//     namefield += "name";
//     document.getElementById(namefield).value = t["team_name"];
//     fields_id += "player";
//     for(var j = 0; j < 11; j++) {
//         var playerfield = fields_id;
//         playerfield += (j+1);
//         document.getElementById(playerfield).value = t["team_members"][j];
//     }
// }