function setInnings(i, b) {
    var innings_data = {            
            "battingteam": gamestats["team_details"][b % 2]["team_name"],
            "bowlingteam": gamestats["team_details"][(b + 1) % 2]["team_name"],
            "innings": i,
            "score": 0,
            "wickets_lost": 0,
            "data": [],
            "batter_stats": {},
            "bowler_stats": {}
    };
    for(var j = 0; j < 11; j++){
        innings_data["batter_stats"][gamestats["team_details"][b % 2]["team_members"][j]] = {
            "runs": 0,
            "balls": 0,
            "fours": 0,
            "sixes": 0,
            "dismissed": false,
            "dismissal_details": ["Not out"]
        };
        innings_data["bowler_stats"][gamestats["team_details"][(b + 1) % 2]["team_members"][j]] = {
            "overs": 0,
            "maidens": 0,
            "runs": 0,
            "wickets": 0
        };
    }
    alert(JSON.stringify(innings_data));
    gamestats["innings"].push(innings_data);
    document.getElementById("matchdetails").style.display = "none";
    document.getElementById("app_main").style.display = "block";
}

//function refreshBatters(placeholder) {
//    if(typeof(document.getElementById("innings_placeholder")) !== "undefined") {
//        document.getElementById("")