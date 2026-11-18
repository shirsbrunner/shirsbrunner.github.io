
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
  var iconize = document.getElementById('diceIcon').value;

  if (selectDiceSize === "other"){
    var destinationDiceSize = manualDiceSize; 
  }
  else {
    var destinationDiceSize = selectDiceSize; 
  }

  if (iconize === "none") {
    var selectedIcon = "";
  } else {
    var selectedIcon = iconize;
  }

  createDice(destinationDiceSize, selectedIcon);
}

/* this actually creates the dice */

function createDice(diceSize, selectedIcon){
  /*toggleHide("sizeSelector");*/
  showID("diceArea");
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

  //make an ARIA-Label
  /*TODO This needs a described by to show "Die 1 star 500 is a 222" Thus "Die 2 sun 600 is a 15"
  This should also update during a roll*/
  let aria_label = diceSize+" die ID "+currentDiceCount+", "+selectedIcon+", is not rolled yet";
  diceOutcome.setAttribute('aria-label', aria_label);

  //now append a count element or something
  let diceFaceCountBatch = document.createElement("div");
  diceFaceCountBatch.className ="diceFaceCountBatch";
  diceFaceCountBatch.innerHTML=diceFaceCount;

  //also add a rollOutcomeElement or something
  let rollOutcomeElement = document.createElement("div");
  rollOutcomeElement.className ="rollOutcomeElement";
  rollOutcomeElement.innerHTML="roll";

  //bottom spacer
  let dicerBot = document.createElement("div");
  dicerBot.className ="dicerBot";
  dicerBot.innerHTML=selectedIcon;



  //Attach stuff to the button
  diceOutcome.appendChild(diceFaceCountBatch);
  diceOutcome.appendChild(rollOutcomeElement);
  diceOutcome.appendChild(dicerBot);

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

  /*document rolls*/
  showID("rollLog");
  documentRolls(true);
}

/* Roll a single dice; dice: ID of the dice, rollAll: binary true/false */
function rollDice(dice, rollAll){
  // get the element of the dice
  let diceToRoll = document.getElementById(dice);
  let facecount = diceToRoll.dataset.facecount;
  let diceLogo = diceToRoll.getElementsByClassName("dicerBot")[0].innerHTML;
  let diceID = diceToRoll.id.substring(10);//TODO: get the ID for the dice alt text - i.e., the 2 in singleDice2
  // get the dice value of the dice
  if (facecount > 0){
    outcome = getRandomInt(facecount);

    //Fix Aria label after roll
    let aria_label = facecount+" sided die ID "+diceID+", "+diceLogo+", shows "+outcome;
    diceToRoll.setAttribute('aria-label', aria_label);
  }
  else {
    outcome = "-"
    let aria_label = "Die with no sides can't be rolled";
    diceToRoll.setAttribute('aria-label', aria_label);
  }
  
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
  diceToRoll.getElementsByClassName("rollOutcomeElement")[0].innerHTML = outcome;

  /* single roll documentation*/
  if(!rollAll){
    showID("rollLog");
    documentRolls(false, dice);
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)+1;
}

/*responsible for the historyEntry. If all rolled: rollAll = true, singleDiceID: optional parameter*/
function documentRolls(rollAll, singleDiceID="notadice"){
  var historyLines = document.getElementById("history_lines");
  let historyItem = document.createElement("div");
  historyItem.className ="historyLine";

  var updateString = ""; 

  if(rollAll){
    // get all dice and read the Outcome-Element (i.e. the indication)
    var allTheDice = document.getElementsByClassName("singleDice");
    for (var i = 0; i < allTheDice.length; i++) {
      updateString += (" | "+ "<span class='historyItem'>"+allTheDice.item(i).getElementsByClassName("rollOutcomeElement")[0].innerHTML+"</span>"); 
    }
  } 
  else {
    // get all the dice, but only colour the current dice (singleDiceID) orange
    var allTheDice = document.getElementsByClassName("singleDice");
    for (var i = 0; i < allTheDice.length; i++) {
      if (allTheDice.item(i).id === singleDiceID){ //colour the element
        updateString += (" | "+ "<span class='historyItem'>"+allTheDice.item(i).getElementsByClassName("rollOutcomeElement")[0].innerHTML+"</span>"); 
      }
      else { //don't colour the element
        updateString += (" | "+allTheDice.item(i).getElementsByClassName("rollOutcomeElement")[0].innerHTML); 
      }
    }
  }

  historyItem.innerHTML= "<span class='alien'>"+ getHumanTime(Date.now())+"</span>" +": "+ updateString;
  historyLines.insertBefore(historyItem, historyLines.firstChild);

  //remove last if more than 10
  removeLastLogEntry();
}

/*
Convert unix time to something readable
based on https://stackoverflow.com/questions/40927938/extract-time-from-timestamp-in-js
*/
function getHumanTime(timestamp){
  return new Date(timestamp).toLocaleTimeString(); 
}

/*progressive disclosure for the input-field*/
function getProgressive(selection) { 
  if (selection === "other") {
    showID("mscWrapper");/*"manualSizeContainer")*/
    /*focus the Input-Element within within*/
    document.getElementById("manualDiceSize").focus(); 
  } else {
    hideID("mscWrapper");/*"manualSizeContainer")*/
  }
}

/* ---------------------------------
Dialog-Stuff, based on 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
--------------------------------- */
const infoDialog = document.getElementById("infoCorner");
const infoShowButton = document.getElementById("showInfo");
const infoCloseButton = document.getElementById("closeInfo");

// "Show the dialog" button opens the dialog modally
infoShowButton.addEventListener("click", () => {
  infoDialog.showModal();
});

// "Close" button closes the dialog
infoCloseButton.addEventListener("click", () => {
  infoDialog.close();
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

function resetAll(){
  /*toggleHide("sizeSelector");*/
  toggleHide("RollAllButton");
  toggleHide("cancelator");
  //remove dice and area
  while (target.hasChildNodes()) { //this should remove all nodes from the target before adding a new list
    target.removeChild(target.firstChild);
  }
  toggleHide("diceArea")
  // put focus on where to add dice to restart again
  document.getElementById("presetDiceSize").focus();
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
