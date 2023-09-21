let time = 0;
let clicks = 0;

function initialize () {
    document.getElementById("t-left").innerHTML = time;
    document.getElementById("clicks").innerHTML = clicks;
}

function addClick() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

function setTime(input) {
    time = input;
    document.getElementById("t-left").innerHTML = time;
}

function countTime() {
    setTimeout(function() {
        document.getElementById("t-left").innerHTML = time;
        time--;
        if (time > -1) {
            countTime();
        }
    }, 1000)
}

function start() {
    clicks = 0;
    countTime();
}



// https://www.w3schools.com/js/js_timing.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp