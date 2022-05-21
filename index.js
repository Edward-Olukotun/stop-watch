let reset = document.getElementById("reset");
let start = document.getElementById("start");
let stops = document.getElementById("stop");
let milli = document.getElementById("milliseconds");
let seconds = document.getElementById("seconds");
let tens = 0;
let secs = 0;
let interval;

function startTimer() {
    tens++;

    if (tens < 9) {
        milli.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        milli.innerHTML = tens;
    }
    if (tens > 99) {
        seconds.innerHTML = "0" + secs++;
        tens = 0;
        milli.innerHTML = "0" + 0;
    }
    if (secs > 9) {
        seconds.innerHTML = secs;
    }
}
start.addEventListener("click", () => {
    interval = setInterval(startTimer);
});
stops.addEventListener("click", () => {
    clearInterval(interval);
});
reset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    secs = "00";
    milli.innerHTML = tens;
    seconds.innerHTML = secs;
});
