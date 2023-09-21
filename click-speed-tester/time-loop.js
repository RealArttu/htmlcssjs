let input = 10
let time = input - 1; // User input on the page


function countTime() {
    setTimeout(function() {
        console.log(time);
        time--;
        if (time > 0) {
            countTime();
        }
    }, 1000)
}

countTime();