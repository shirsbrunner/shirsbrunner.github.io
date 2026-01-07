
// Registering Service Worker
// start dev-server with npx http-server

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }

/* ---------------------------------
App Stuff
- just measures the size of the screen
--------------------------------- */ 

/*
Variables
*/
const rootNode = document.documentElement; //html root node
var outputTarget = document.getElementById("outputTarget") //the ID to write the output to

// variables to be shown
var screenInnerWidth;
var screenInnerHeight;
//var userAgentString = navigator.userAgent; //this needs to be done only once - but the info is not really necessary
//var screenPixelRatio; // seems not to work with safaris zoom - so maybe... calculate? maybe: https://www.reddit.com/r/webdev/comments/1dsb31s/windowdevicepixelratio_in_safari_vs_others/
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var ratio = gcd(screenWidth, screenHeight);
var yourScreenRatio = `Current monitor's aspect: ${screenWidth/ratio}:${screenHeight/ratio}`;


// initial trigger, also triggers on resize
function initialize(){
  console.log(screenWidth);
  console.log(screenHeight);
  updateDimensions(); 
  setOutput(); 
}

/*
Rendering the output
TODO: this should be a value label pair - definition list or description list
*/
function setOutput(){
  
  outputTarget.innerHTML = `<div class ="small">Available browser space:<br></div>
  Width × Height: ${screenInnerWidth} × ${screenInnerHeight} <br>
  <div class = "small"> That's ${(screenInnerWidth*screenInnerHeight).toLocaleString()} pixels overall! <br>
  ${yourScreenRatio}
  </div>`
  /*`Width: ${screenInnerWidth}px <br>
  Height: ${screenInnerHeight}px <br>
  PixelRatio: ${screenPixelRatio} (not on Safari)`*/;
}

//organize all data to be displayed on the screen
//maybe this: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function updateDimensions(){
  screenInnerWidth = rootNode.clientWidth;
  screenInnerHeight = rootNode.clientHeight;
  //screenPixelRatio = window.devicePixelRatio;
}

/*
function to calculate the greatest common denominator
based on: https://stackoverflow.com/questions/1186414/whats-the-algorithm-to-calculate-aspect-ratio
*/
function gcd (a, b) {
  return (b == 0) ? a : gcd (b, a%b);
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
// TODO - might not be needed
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
initialize();
window.addEventListener("resize", initialize);