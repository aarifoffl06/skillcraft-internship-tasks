let startTime;
let updatedTime;
let difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("pauseBtn").addEventListener("click", pause);
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("lapBtn").addEventListener("click", lap);

function start() {

if (!running) {

startTime = new Date().getTime() - difference;

timerInterval = setInterval(updateTime, 1000);

running = true;

}

}

function pause() {

clearInterval(timerInterval);

running = false;

}

function reset() {

clearInterval(timerInterval);

difference = 0;

running = false;

display.innerHTML = "00:00:00";

lapList.innerHTML = "";

}

function lap() {

if (running) {

const li = document.createElement("li");

li.innerText = display.innerText;

lapList.appendChild(li);

}

}

function updateTime() {

updatedTime = new Date().getTime();

difference = updatedTime - startTime;

let seconds = Math.floor((difference / 1000) % 60);

let minutes = Math.floor((difference / (1000 * 60)) % 60);

let hours = Math.floor((difference / (1000 * 60 * 60)));

display.innerHTML =
format(hours) + ":" + format(minutes) + ":" + format(seconds);

}

function format(unit) {

return unit < 10 ? "0" + unit : unit;

}