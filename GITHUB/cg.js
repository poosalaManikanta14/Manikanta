// let teamAScore = 0;
// let teamBScore = 0;

// function addRun(team, runs) {
//     if (team === 'A') {
//         teamAScore += runs;
//         document.getElementById('teamA-score').innerText = teamAScore;
//     } else if (team === 'B') {
//         teamBScore += runs;
//         document.getElementById('teamB-score').innerText = teamBScore;
//     }
// }

// function resetScore() {
//     teamAScore = 0;
//     teamBScore = 0;
//     document.getElementById('teamA-score').innerText = teamAScore;
//     document.getElementById('teamB-score').innerText = teamBScore;
// }

let teamA = { name: 'Team A', score: 0, wickets: 0, balls: 0 };
let teamB = { name: 'Team B', score: 0, wickets: 0, balls: 0 };

function setTeamName(team) {
    let name = document.getElementById(`team${team}-name`).value;
    if (name) {
        document.getElementById(`display-team${team}`).innerText = name;
        if (team === 'A') {
            teamA.name = name;
        } else {
            teamB.name = name;
        }
    } else {
        alert('Please enter a valid team name.');
    }
}


function addRun(team, runs) {
    let currentTeam = team === 'A' ? teamA : teamB;
    currentTeam.score += runs;
    document.getElementById(`team${team}-score`).innerText = currentTeam.score;
}

function addWicket(team) {
    let currentTeam = team === 'A' ? teamA : teamB;
    if (currentTeam.wickets < 10) {
        currentTeam.wickets++;
        document.getElementById(`team${team}-wickets`).innerText = currentTeam.wickets;
    } else {
        alert(`${currentTeam.name} is all out!`);
    }
}

function addBall(team) {
    let currentTeam = team === 'A' ? teamA : teamB;
    currentTeam.balls++;
    let overs = Math.floor(currentTeam.balls / 6);
    let ballsRemaining = currentTeam.balls % 6;
    let displayOvers = `${overs}.${ballsRemaining}`;
    document.getElementById(`team${team}-overs`).innerText = displayOvers;
}
function resetScore() {
    teamA = { name: teamA.name, score: 0, wickets: 0, balls: 0 };
    teamB = { name: teamB.name, score: 0, wickets: 0, balls: 0 };
    document.getElementById('teamA-score').innerText = 0;
    document.getElementById('teamA-wickets').innerText = 0;
    document.getElementById('teamA-overs').innerText = '0.0';
    document.getElementById('teamB-score').innerText = 0;
    document.getElementById('teamB-wickets').innerText = 0;
    document.getElementById('teamB-overs').innerText = '0.0';
}