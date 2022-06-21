// Global variables
// to store time and watch elements value
const time_element = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let counter = 0; // calculates complete time
let intervals = null;

// Events listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

//update the timer,calculates entire time and displays correct time
function timer() {
  counter++;

  //format our time
  let hrs = Math.floor(counter / 3600);
  let mins = Math.floor((counter - hrs * 3600) / 60);
  let secs = counter % 60;

  // to display secs hrs and mins as in double digits
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  //calculates  hrs ,mins and secs as expressions and displays in this format
  time_element.innerText = `${hrs}:${mins}:${secs}`;
}

//  start function ,if interval  has no vlaue,then calling the timer function again
function start() {
  if (intervals) {
    return;
  }
  intervals = setInterval(timer, 1000);
}
// assigning intervals to null after stop or pause action is taken
function stop() {
  clearInterval(intervals);
  intervals = null;
}

// calling stop function and then reseting the total time ie counter to 0 ,and time to the 00:00:00
function reset() {
  stop();
  counter = 0;
  time_element.innerText = "00:00:00";
}
