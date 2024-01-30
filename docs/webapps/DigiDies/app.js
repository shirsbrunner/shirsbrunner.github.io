
// Registering Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }


/* ---------------------------------
App Stuff
- Building and rolling dice mainly
- from different inputs
--------------------------------- */ 

/*TODO: 
- DONE This needs to distinguish between two dice (and more) - DICE now have a facevalue
- Hide (show) menu to add dice - naa - persistent now
- DONE - button to roll all dice
- make dice targetable by tabbing
https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
https://stackoverflow.com/questions/11894875/using-wildcards-in-getelementsbyclassname

- DONE - click on dice to roll just one
- Add some roll-history below
*/
/*this is triggered to understand what dice to add*/
function buttonBuildDice(){
  var selectDiceSize = document.getElementById('presetDiceSize').value; 
  var manualDiceSize = document.getElementById('manualDiceSize').value;

  if (selectDiceSize === "other"){
    var destinationDiceSize = manualDiceSize; 
  }
  else {
    var destinationDiceSize = selectDiceSize; 
  }
  createDice(destinationDiceSize);
}

/* this actually creates the dice */
function createDice(diceSize){
  /*toggleHide("sizeSelector");*/
  showID("cancelator");
  showID("RollAllButton");

  diceFaceCount = Number(diceSize);
  const target = document.getElementById("target"); //gets the target-ID element

  //check how many dice are available
  var currentDiceCount = document.getElementsByClassName("singleDice").length

  /* add the dice Area and attach a clickhandler*/
  let diceOutcome = document.createElement("button");
  diceOutcome.id = "singleDice"+currentDiceCount;
  diceOutcome.className = "singleDice";
  // the following adds a custom variable to the dom element, in this case: data-facecount, js needs dataset to get the info
  diceOutcome.dataset.facecount = diceFaceCount; 
  //diceOutcome.innerHTML = "click";
  diceOutcome.addEventListener('click', function(){rollDice(diceOutcome.id, false)});

  //now append a count element or something
  let diceFaceCountBatch = document.createElement("div");
  diceFaceCountBatch.className ="diceFaceCountBatch";
  diceFaceCountBatch.innerHTML=diceFaceCount;

  //also add a rollOutcomeElement or something
  let rollOutcomeElement = document.createElement("div");
  rollOutcomeElement.className ="rollOutcomeElement";
  rollOutcomeElement.innerHTML="click";

  //bottom spacer
  let dicerSpacer = document.createElement("div");
  dicerSpacer.className ="dicerSpacer";
  dicerSpacer.innerHTML=" ";

  //Attach stuff to the button
  diceOutcome.appendChild(diceFaceCountBatch);
  diceOutcome.appendChild(rollOutcomeElement);
  diceOutcome.appendChild(dicerSpacer);

  target.appendChild(diceOutcome);   //attach the dice
}

/* ---------------------------------
Rolling dice
--------------------------------- */
function rollAllDice(){
  //get a list of all dice
  var allTheDice = document.getElementsByClassName("singleDice"); //should give an array

  for (var i = 0; i < allTheDice.length; i++) {
    rollDice(allTheDice.item(i).id, true);
  }

  // get all dice and write the line to id="history_lines"

  var historyLines = document.getElementById("history_lines");
  let historyItem = document.createElement("div");
  historyItem.className ="historyItem";
  historyItem.innerHTML= Date.now()+": all Updated";
  historyLines.insertBefore(historyItem, historyLines.firstChild);
}

/* Roll a single dice; dice: ID of the dice, rollAll: binary true/false */
function rollDice(dice, rollAll){
  // get the element of the dice
  let diceToRoll = document.getElementById(dice);
  // get the dice value of the dice
  if (diceToRoll.dataset.facecount > 0){
    outcome = getRandomInt(diceToRoll.dataset.facecount);
  }
  else {
    outcome = "-"
  }
  
  // roll the dice
  let diceOutcome = document.getElementById(dice); //is expecting something like "singleDice"
  
  /* would be nice, to have a little animation here
  */
  diceToRoll.animate(
  [
    { transform: 'rotateY(0deg)', color:'rgba(0 0 0 / 0%)'}, // each line represents a keyframe
    { transform: 'rotateY(360deg)', color:'rgba(0 0 0 / 0%)'}
  ], {
    duration: 500 //if only duration is specified, only 1 iteration is made
    }
  );
  diceOutcome.getElementsByClassName("rollOutcomeElement")[0].innerHTML = outcome;

  /* single documentation */
  if(!rollAll){
    var historyLines = document.getElementById("history_lines");
    let historyItem = document.createElement("div");
    historyItem.className ="historyItem";
    historyItem.innerHTML= Date.now()+": single Updated";
    historyLines.insertBefore(historyItem, historyLines.firstChild);
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)+1;
}

/*progressive disclosure for the input-field*/
function getProgressive(selection) { 
  if (selection === "other") {
    showID("manualDiceSize")
  } else {
    hideID("manualDiceSize");
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

function resetAll(){
  /*toggleHide("sizeSelector");*/
  toggleHide("RollAllButton");
  toggleHide("cancelator");
  while (target.hasChildNodes()) { //this should remove all nodes from the target before adding a new list
    target.removeChild(target.firstChild);
  }
}
