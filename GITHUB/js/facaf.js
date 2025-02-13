var gamestats = {};

function loadTeams() {
    var result = true;
    /* Check if the team names are same */
    if(document.getElementById("team1name").value.trim() == document.getElementById("team2name").value.trim()) {
        alert("Two different teams face each other");
        result = false;
    }
    if(document.getElementById("team1abbr").value.trim() == document.getElementById("team2abbr").value.trim()) {
        alert("The scorecard should be able to clearly identify each team");
        result = false;
    }
    if(document.getElementById("team1name").value.trim().length < 1){
        result = false;
    }
    if(document.getElementById("team2name").value.trim().length < 1){
        result = false;
    }
    if(document.getElementById("team1abbr").value.trim().length < 1){
        result = false;
    }
    if(document.getElementById("team2abbr").value.trim().length < 1){
        result = false;
    }
    return result;
}

function startGame() {
    gamestats["team_details"] = [];
    for(var i = 1; i < 3; i++) {
        var fields_id = "team";
        fields_id += i;
        var namefield = fields_id;
        namefield += "name";
        var teamname = document.getElementById(namefield).value;
        fields_id += "player";
        var teammembers = [];
        for(var j = 0; j < 11; j++) {
            var playerfield = fields_id;
            playerfield += (j+1);
            teammembers.push(document.getElementById(playerfield).value);
        }
        var t = {
            "team_name": teamname,
            "team_members": teammembers
        };
        gamestats["team_details"].push(t);
    }
    document.getElementById("teamselection").style.display = "none";
    document.getElementById("matchdetails").style.display = "block";
}

function loadInitialGameDetails() {
    var matchdetails = {};
    matchdetails["wickets"] = document.getElementById("maxwickets").value;
    if(document.getElementById('isgametest').checked == true) {
        matchdetails["isTest"] = true;
        matchdetails["followon"] = document.getElementById("minfollowon").value;
    } else {   
        matchdetails["isTest"] = false;
        matchdetails["maxovers"] = document.getElementById("maxovers").value;
    }
    gamestats["match_details"] = matchdetails;
    gamestats["current_innings"] = 0;
    gamestats["innings"] = [];
    alert(JSON.stringify(gamestats));
    setInnings(1, 0);
}