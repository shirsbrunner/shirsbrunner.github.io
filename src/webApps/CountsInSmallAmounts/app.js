
// Registering Service Worker
// start dev-server with npx http-server

if ('serviceWorker' in navigator) {
    //navigator.serviceWorker.register('./sw.js');
    navigator.serviceWorker.register('./sw.js', {scope: '../CountsInSmallAmounts/'});
  }


/* ---------------------------------
App Stuff
- Count Time from a Starting point
- Add an hourly rate
- Add 1-n people
- press start - cash counts up
- press stop - cash counting stops, restart or reset
--------------------------------- */ 

/*
Variables
*/

var hourlyRate = 0; //how much is the average hour set at?
var currency = ""; //what's the currency sign?, i.e., euro, pound, chf
var attendance = 0;  //how many people in the meeting?
var initialTime; //when did the counter start - unix timestamp?
var spentCash = 0.0; //how much is spent after a break? 
var timeIsRunning = false; //is the counter running?
var updateIntervall = 1.5; // how often should the counter update in seconds (more or less)
var timerHelper = null; //the timer, so that it can be stopped or started...

/*
function on the button
calling the builder for the counter
Seems to be done for the new app
*/
function buttonBuildCounter(){
  //TODO if running, display a text, that there is already a meeting in place...
  //else hide the text in case of 

  var selectHourlyRate = document.getElementById('hourlyRate').value; 
  var manualHourlyRate = document.getElementById('manualHourlyRate').value;
  currency = document.getElementById('counterCurrency').value;
  attendance = document.getElementById('peopleCount').value; 
  
  if (selectHourlyRate === "Custom"){
    hourlyRate = manualHourlyRate; 
  }
  else {
    hourlyRate = selectHourlyRate; 
  }

  /* debugging
  console.log("selectHourlyRate: " + selectHourlyRate);
  console.log("manualHourlyRate: " + manualHourlyRate);
  console.log("hourlyRate: " + hourlyRate);
  console.log("currency: " + currency);
  console.log("attendance: " + attendance);
  console.log("time is running: " + timeIsRunning);
  console.log("initial Time: " + initialTime);
  */

  initialTime = Date.now();
  timeIsRunning = true; 
  cashIsSpent(); //start and update all 3 secs
  showID("countArea");
  showID("pauseator");
  showID("cancelator");
  hideID("playaganator");
  showID("meetingLog");
  hideID("sizeSelector");
  documentAnything("Welcome to the meeting");
}

/*
  Calculates the value for now (given the calculator is running)
  calculator running: the counter has been initialized
*/
function calculateNow(){
  var currentTime = Date.now(); // get timestamp now
  var timeDistance = (currentTime-initialTime)/(1000*60*60); //timedistance in seconds
  var costPerHour = hourlyRate*attendance; // cost per hour
  var longCost = costPerHour*timeDistance+spentCash;

  if (longCost >= 10){
    var shortCost = Math.floor(longCost);
  } else {
    var shortCost = Math.floor((longCost)*10)/10;
  }

  return shortCost; 
}

/*
  Writes the counter display with given values (currency is global)
*/
function writeCounter(paramPrice){
    //set the currency into currency
    const currencyTarget = document.getElementById("currency"); //gets the target-ID element
    currencyTarget.innerHTML = " " + currency; 
  
    //set the starting cash value into cashvalue (obvs, this will be increased by the second)
    const cashValueNow = document.getElementById("cashValue"); //gets the target-ID element
    cashValueNow.innerHTML = paramPrice;   
}

/* ---------------------------------
Counter while running
--------------------------------- */

// this will be the function calling the stuff afterwards
function cashIsSpent(){

  var intervall = updateIntervall;
  // loop running every "intervall" seconds
  //intervall = update cadence in seconds - i.e. intervall=3, update every 3 seconds
  //should perform updateCounter() every some seconds
    var tempPrice = calculateNow();
    writeCounter(tempPrice);
    timerHelper = setTimeout(cashIsSpent, 1000 * intervall); //this get's the correct time all seconds and displays it accordingly
}
//disables the timer (needed for bookkeeping)
function stopCashCounter(){
  clearTimeout(timerHelper);
  timerHelper = null; 
}

// function to pause the counter with the existing value and new starting time
function pauseCounter(){

    stopCashCounter();
    // NOTE: This is wrong, should be the real spent cash, not the thing shown in the GUI ;) but it is near
    spentCash = calculateNow();  // store the current cash value in a variable: update "spentCash"
    writeCounter(spentCash); //show the exact value when pressing break
    // change the pause button to a play button triggering "restartCounter()"
    hideID("pauseator"); //well, this will lead to focus loss - maybe we can later put focus on the playaganator?
    showID("playaganator");
    /*
    console.log("*** pause started ***")
    console.log("hourlyRate: " + hourlyRate);
    console.log("currency: " + currency);
    console.log("attendance: " + attendance);
    console.log("time is running: " + timeIsRunning);
    console.log("initial Time: " + initialTime);
    */
    documentCount(Date.now(), spentCash, "Break" );
}

// function to restart the counter
function restartCounter(){
    initialTime = Date.now(); //set starting-Time = now
    cashIsSpent(); //restart the loop
    //add a timestamp-start-entry to the log
    showID("pauseator"); //well, this will lead to focus loss - maybe we can later put focus on the playaganator?
    hideID("playaganator");
}

// function to remove the counter
function resetCounter(){
  if(timerHelper != null){
    stopCashCounter(); //stop the timer
    //make an entry of the last meeting - bascally so we can't cheat that much
    spentCash = calculateNow();  // store the current cash value in a variable: update "spentCash"
    documentCount(Date.now(), spentCash, "Let's meet again later!" ); //needs to be before the reset
  } else {
    //it's already stopped and spent count is already calculated
    documentCount(Date.now(), spentCash, "Let's meet again later!" ); //needs to be before the reset
  }
  //resetting everything
  spentCash = 0; //nothing is spent now
  writeCounter(0);  //redraw at 0
  

  /*
  console.log("*** cleanup done ***")
  console.log("hourlyRate: " + hourlyRate);
  console.log("currency: " + currency);
  console.log("attendance: " + attendance);
  console.log("time is running: " + timeIsRunning);
  console.log("initial Time: " + initialTime);
  */
  hideID("countArea");
  hideID("pauseator"); //well, this will lead to focus loss - maybe we can later put focus on the playaganator?
  hideID("playaganator");
  hideID("cancelator");
  showID("sizeSelector");
}

/*responsible for the historyEntry. If all rolled: rollAll = true, singleDiceID: optional parameter

probably this could be reused to show, if someone pressed break...
Document "on"-Times

*/

function documentAnything(textBlue){ 
  var historyLines = document.getElementById("history_lines");
  let historyItem = document.createElement("div");
  historyItem.className ="historyLine";

  // the log-String
  var updateString = ""; 
  updateString += (" | "+ textBlue); 

  //adding the timestamp and string
  historyItem.innerHTML= "<span class='alien'>"+ getHumanTime(Date.now())+"</span>" +": "+ updateString;
  historyLines.insertBefore(historyItem, historyLines.firstChild);

  //remove last if more than 10
  removeLastLogEntry();
}

function documentCount(paramTime, paramCurrentCost, paramInfostring){
  var historyLines = document.getElementById("history_lines");
  let historyItem = document.createElement("div");
  historyItem.className ="historyLine";

  // the log-String
  var updateString = ""; 
  updateString += (" | "+ paramInfostring+"<span class='historyItem'>"+" Cost so far: "+paramCurrentCost + " " + currency +"</span>"); 

  //adding the timestamp and string
  historyItem.innerHTML= "<span class='alien'>"+ getHumanTime(paramTime)+"</span>" +": "+ updateString;
  historyLines.insertBefore(historyItem, historyLines.firstChild);

  //remove last if more than 10
  removeLastLogEntry();
}

/*
  Convert unix time to something readable
  based on https://stackoverflow.com/questions/40927938/extract-time-from-timestamp-in-js
  will be used for the "log"
*/
function getHumanTime(timestamp){
  return new Date(timestamp).toLocaleTimeString(); 
}

/*
  progressive disclosure for the input-field
*/
function getProgressive(selection) { 
  if (selection === "Custom") {
    showID("manualRateDiv")
  } else {
    hideID("manualRateDiv");
  }
}

/* ---------------------------------
Hiding things from the DOM: 
- Selection when selected (but show cancel)
- hide cancel (but show selection) when cancelled
--------------------------------- */ 
/*hides or shows the element with the given ID */
function toggleHide(idToToggle) {
  const target = document.getElementById(idToToggle);
  target.classList.toggle("hidden");
}

function showID(idToShow) {
  const target = document.getElementById(idToShow);
  target.classList.remove("hidden");
}

function hideID(idToHide){
  const target = document.getElementById(idToHide);
  target.classList.add("hidden");
}

/*
remove child nodes from the log entry, based on this: 
https://stackoverflow.com/questions/11776570/javascript-child-node-count
*/
function removeLastLogEntry(){
  var temp = document.getElementById('history_lines');
  if (temp.children.length > 10){
    //window.alert(temp.children.length);
    temp.removeChild(temp.lastElementChild)
  }
}
