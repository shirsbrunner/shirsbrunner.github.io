
// Registering Service Worker
// start dev-server with npx http-server


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }


/* ---------------------------------
App Stuff
- Clickin on the card loads a text from a json
- maybe add text from Json at the start
- "Turn-over"-effect - if it's supposed to be a card
- "indication" that the card is clickable
--------------------------------- */ 

/*
Variables
*/

var advice; //should probably be an array

//hides the splash H1 to remove any distractions
function hideSplash(){

}

//load advice from a JSON-File
//maybe this: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function loadAdvice(){
  const url = "./dataFiles/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  
    advice = await response.json(); //was const json
    advice=advice.advice; //this should get the array only
    console.log(advice);
  } catch (error) {
    console.error(error.message);
  }
}

//get one piece of random advice out of the loaded list
function getRandomAdvice(){
  //console.log(advice);
  let arrayLength = advice.length-1; //as arrays are 0-1 for a 2 element array
  let adviceID=getRandomQuoteID(arrayLength);
  //console.log(adviceID);
  let adviceText = advice[adviceID];
  //console.log(adviceText);
  setAdvice(adviceText);
}



//set advice into "innerHTML"
function setAdvice(adviceText){
  let adviceTarget = document.getElementById("adviceTarget");
  adviceTarget.innerHTML = adviceText
}



/* ---------------------------------
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 also
 https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 --------------------------------- */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* ---------------------------------
Wrapping a custom function for arrays
---------------------------------*/
function getRandomQuoteID(length) {
  return getRandomInt(0, length);
}

/* ---------------------------------
Dialog-Stuff, based on 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
--------------------------------- */
const dialog = document.getElementById("infoCorner");
const showButton = document.getElementById("showInfo");
const closeButton = document.getElementById("closeInfo");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


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

/* ---------------------------------
Start Block
--------------------------------- */
loadAdvice();