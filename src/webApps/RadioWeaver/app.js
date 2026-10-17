
/* ---------------------------------
JS for Radioweaver
--------------------------------- */ 
/*
- based on https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality as all PWA
- Serviceworker based on https://goingoffline.adactio.com/chapter1/
- There is a lot of Stackoverflow in this
- And no AI (AFAIK... sources nowadays)
- This could probably be improved...
*/

/* ---------------------------------
Serviceworker
--------------------------------- */ 
// Registering Service Worker
// start dev-server with npx http-server

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
    //adding a promise-check as adactio suggests in going offline.
    .then( function (registration) {
        console.log('Success!', registration.scope);
    })
    .catch( function (error) {
        console.error('Failure!', error);
    });
    console.log('All done. Service-Worker:');
    //console.log(navigator.serviceWorker) - this just returns an empty promise.
}

/* ---------------------------------
Variables
--------------------------------- */ 

const Debug = true; //triggers Debug mode
//These change a Radio in the list
const changeRadioButton = document.getElementById("changeRadio"); //ID for the stream upload Button
const downloadStationsButton = document.getElementById("downloadStationJSON"); // ID for stream download
const streamUrlEl = document.getElementById("stream_input"); //Input field for the stream upload form
const streamNameEl = document.getElementById("stream_name"); //Input field for the stream name

const theAudioPlayer = document.getElementById("theAudioPlayer"); //AudioPlayer-Component
//const playPauseButton = document.getElementById("playPauseButton"); //custom Play / Pause-Button ==> use this if play pause
const pauseButton = document.getElementById("playPauseButton"); //custom Play / Pause-Button ==> use this if stop only
const volumeUpButton = document.getElementById("volumeUp"); //custom Play / Pause-Button
const volumeDownButton = document.getElementById("volumeDown"); //custom Play / Pause-Button
const radioInputs = document.querySelectorAll('input[name="stream"]'); //the 5 existing Radio-Buttons (for use in channel switching)
const fileSelect = document.getElementById("fileSelect"); //file-select Button
const fileElem = document.getElementById("fileElem"); //The file-selector-Element - i.e., the dialog to pick a file

var audioList; //the Audio-list to be filled later...
var initialLoad = true; //decides if the audioList is loaded from a JSON-File
const initialVolume = 0.5; //initial volume of audioplayer
const audioPlayerIncrement = 0.1; //increment / decrement of audioPlayer
const staticLink = 'Sounds/static.mp3'; // the link to the static music
const initialRadioJSONUrl = "sources.json"; //where the initial stations are stored
const STORAGE_KEY = "radio-stations"; //where the radios will be kept in storage

var frequencyData //the audioStreamFrequencyData

/* ---------------------------------
Initialize
--------------------------------- */

async function initialize(){
  //check, if you can get the audio List from storage. If not, audio List is set to an empty array
  audioList = await getDataFromStorage();
  //update the RadioButtons from the JSON
  await initializeAudioList(); //wait until loaded, else the index does not work
  attachRadioListeners();
  theAudioPlayer.volume = initialVolume;
  //load the audio visualizer
  //loadAudioContext(); 
}

/* ---------------------------------
THIS is the audio stream analyser based from here: 
https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
Currently, this does not really work (cross-origin-problem)


--------------------------------- */

function loadAudioContext(){
  var ctx = new AudioContext();
  var audioSrc = ctx.createMediaElementSource(theAudioPlayer);
  var analyser = ctx.createAnalyser();
  // we have to connect the MediaElementSource with the analyser 
  audioSrc.connect(analyser);
  
  // frequencyBinCount tells you how many values you'll receive from the analyser
  frequencyData = new Uint8Array(analyser.frequencyBinCount);
}
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
 
function renderFrame() {
  requestAnimationFrame(renderFrame);
  // update data in frequencyData
  analyser.getByteFrequencyData(frequencyData);
  // render frame based on values in frequencyData
  console.log(frequencyData)
}

//turn this into a loop - I guess? 
//Starting the Radio should start this loop
function audioFrequencyLooper(){
  renderFrame();
}

/* ---------------------------------
Tuner Dialog Stuff
--------------------------------- */
const tunerButton = document.getElementById('tuneStationButton'); //the button for tuning
const tunerDialog = document.getElementById('tunerDialog'); // the dialogue
const tunerCloser = document.getElementById('tunerCloser');

// listener for Tuner-Popup
tunerButton.addEventListener("click", 
  (event) => {
    tunerDialog.showModal();
  })

// Listener to submit the form that adds new Stream information to selected stream
changeRadioButton.addEventListener("click", 
    (event) => {
        //prevent from submitting to server
        event.preventDefault();

        //get URL
        const stream_url = streamUrlEl.value;
        const stream_name = streamNameEl.value; 

        const clean_name = escapeHtml(stream_name);

        if(Debug){console.log(stream_url)};
        if(Debug){console.log(stream_name)};
        if(Debug){console.log(clean_name)};

        var localRadioIndex = getCurrentRadioIndex()

        //change the RadioButton on Stream
        assignRadioToButton(clean_name, stream_url, localRadioIndex);
        //update the AudioList to have the correct Data and return a stringified List...
        var tempListJSON = changeRadioInAudioList(clean_name, stream_url, localRadioIndex)
        //push the audioList to storage
        window.localStorage.setItem(STORAGE_KEY, tempListJSON);
        
        //Reload the Radio (as the Button is already selected)
        setCurrentStream(stream_url);
        tunerDialog.close();
    }
)

// "Close" button closes the dialog
tunerCloser.addEventListener("click", (event) => {
  tunerDialog.close();
});

// attach a listener to each radioButton
// the buttons don't change, so the listeners are persistent.
function attachRadioListeners(){
  if(Debug){console.log("attachRadio_Stuff")};
  if(Debug){console.log(radioInputs)};
  radioInputs.forEach((button) => {
      button.addEventListener('change', (event) => {
          setCurrentStream(event.target.value); //trigger the stream
      });
  });

}

/* ---------------------------------
Attaching event listeners
--------------------------------- */

//Volume-Buttons
volumeUpButton.addEventListener("click", 
  (event) => {
    event.preventDefault();
    tempVolume = theAudioPlayer.volume + audioPlayerIncrement;
    if (tempVolume > 1){tempVolume = 1}
    theAudioPlayer.volume = tempVolume
    if(Debug){console.log("volume: " + theAudioPlayer.volume)};
})

volumeDownButton.addEventListener("click", 
  (event) => {
    event.preventDefault();
    tempVolume = theAudioPlayer.volume - audioPlayerIncrement;
    if (tempVolume < 0){tempVolume = 0}
    theAudioPlayer.volume = tempVolume
    if(Debug){console.log("volume: " + theAudioPlayer.volume)};
})

// download-Button
downloadStationsButton.addEventListener("click", 
  (event) => {
    event.preventDefault();
    var tempJsonStructure = writeAudiolistToJSONObject(); // get the data
    var link = createExportJSONFileUrl(); // create an export-link
    download(link); //trigger the download
  }
)

//this is from https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript
//adjusted, it triggers a download of a JSON - the files naming is still a bit off...
function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = "InternetRadioStations.json" //name of the file
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

// upload button
// could also do drag and drop - on the same page below
// https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
});

fileElem.addEventListener("change", handleFile); // on change, this triggers the handle file. 

// handle the file - MOVE to functions later
// How to handle the file now? should be here: https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_showing_thumbnails_of_user-selected_images
function handleFile(){
  //const fileList = this.files
  const file = this.files[0];
  console.log(file);
  //this should create an objectUrl
  // https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
  const objectURL = window.URL.createObjectURL(file);
  loadAudioListFromJSON(objectURL); // load it into the audioList
  updateButtonsFromAudioList()
}

/* ---------------------------------
Functions
--------------------------------- */

// This changes the content of the audiolist at the given Index
// It also returns a JSON-Structure of the audioList
function changeRadioInAudioList(lName, lStream, lIndex){
  //load the JS-Object
  let tempList = audioList //AudioList should have initially parsed the JSON. 
  if(Debug){console.log(tempList);};

  //Change Content
  tempList.audio_streams[lIndex].Name = lName; 
  tempList.audio_streams[lIndex].Stream = lStream; 

  //update the audioList with the new content
  audioList = tempList

  var audioListAsJSON = writeAudiolistToJSONObject(); //get the data
  return audioListAsJSON; 
}

function writeAudiolistToJSONObject(){
    //write JSON-object
    var tempList = JSON.stringify(audioList,null, 2);//the parameters make it easier readable
    return tempList; 
}

//Note: - can't write to JSON file (as this gives access to the file system...)
//this function generates a downloadable file as seen here: 
//https://stackoverflow.com/questions/22055598/writing-a-json-object-to-a-text-file-in-javascript
//https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
//basically this: https://stackoverflow.com/questions/55613438/reactwrite-to-json-file-or-export-download-no-server
function createExportJSONFileUrl(){
  // get the data as JSON string
  var exportBase = writeAudiolistToJSONObject();
  // make it into a file
  const blob=new Blob([exportBase],{type:'application/json'})
  //make an object link to download it
  const href = URL.createObjectURL(blob);
  return href; 
}

//create the actual radio list out of the JSON or Base Data onload
//needs to be async, as fetchData is async
async function initializeAudioList(){
  console.log(audioList);
  //if (typeof audioList == 'undefined'){
  if (audioList.length == 0){//the array is assignet at initialize. If it's empty, there was no data in storage.
    //this should only be done once from the init_json
    await loadAudioListFromJSON(initialRadioJSONUrl);
  } else {
    //get data from storage
    if(Debug){console.log("data from Storage");};
    audioList = getDataFromStorage();
  }
  if(Debug){console.log(audioList)}
  updateButtonsFromAudioList(); 
}

// pick the data from a JSON-File
// once from the initJSON - else on demand.
async function loadAudioListFromJSON(fileLocation){
    if(Debug){console.log("getting data from JSON");};
    var dangerData = await getDataFromJSON(fileLocation);
    var safeData = cleanJSON(dangerData);
    audioList = safeData; 
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(audioList)); 
}

/*
Function to clean the names shown in a GUI from Html stuff...
Guesstimation: Urls are only played by audioplayer and should be safe
So: before writing the audio-List, this should Sanitize the JSON-File - like this a link could be attached in upload. 
Not sure, why someone would do this to themselfs, but there we are. 
Further Potential Ideas: https://stackoverflow.com/questions/25983090/is-sanitizing-json-necessary
*/
function cleanJSON(dangerData){
    console.log("dangerData" + dangerData);
    
    // TODO iterate over the different fields and fix the different entry posts
    for(let i = 0; i < dangerData.audio_streams.length; i++) {
      let obj = dangerData.audio_streams[i];

      if(Debug){console.log(obj.Name);};
      obj.Name = escapeHtml(obj.Name);
      if(Debug){console.log(obj.Name);};
    } 
    var fixedData = dangerData; 
  var output = fixedData; 
  return output
}

// clean the HTML-Code
// maybe this: https://lucanerlich.com/javascript/user-input-sanitization/
function escapeHtml(input) {
    var output = input;
    output = output
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;") // this does not work well with JSON
        .replaceAll("'", "&#39;"); // this does not work well with JSON
    return output; 
}

// reads the audioList, updates RadioButtons
function updateButtonsFromAudioList(){
  for(let i = 0; i < audioList.audio_streams.length; i++) {
    let obj = audioList.audio_streams[i];

    if(Debug){console.log(obj.Name);};
    if(Debug){console.log(obj.Stream);};

    //Replacing initial RadioButtons
    assignRadioToButton(obj.Name, obj.Stream, i);
    }
}

//get radios from Storage
function getDataFromStorage(){
  const radioData = window.localStorage.getItem(STORAGE_KEY);
  //if no radios were stored, default to empty array
  //else return a JSON-Object with radios
  const radioStations = radioData ? JSON.parse(radioData) : [];
  if(Debug){console.log("Radio Stations: "+radioStations)};
  return radioStations;
}

//get data from a JSON-File
//returns a json-object
async function getDataFromJSON(fileLocation) {
  try {
    const response = await fetch(fileLocation);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    if(Debug){console.log("Json loading result: " + result)};
    return result; 
  } catch (error) {
    console.error(error.message);
  }
}

//Assigns a radio to the button at Index
//This is used "on load of the app" to build the list
//This is used when "changing" the content of a radiobutton
function assignRadioToButton(Name, Stream, index){
    if(Debug){console.log("AssignmentCalled")}
    let buttonIDString = "rbutton"+index;
    let labelIDString = "label"+index
    let currentButton = document.getElementById(buttonIDString);
    let currentLabel = document.getElementById(labelIDString);
    currentButton.value = Stream; 
    currentLabel.innerHTML = Name; 
}

/* ---------------------------------
Playing Music and changing the AudioPlayer
--------------------------------- */

// get the current Radio Button Index - what stream is the radio button set to? 
function getCurrentRadioIndex(){
    //Pick the ID of the currently selected Radio and pick the right most Element
    //TODO Check for "NAN" if nothing is selected
    var currentRadioIndex = document.querySelector("input[name=stream]:checked").id;
    if(Debug){console.log("Current Index: " + document.querySelector("input[name=stream]:checked").id)};
    currentRadioIndex = currentRadioIndex.slice(-1)
    if(Debug){console.log(currentRadioIndex)};
    return currentRadioIndex; 
}

// this is a custom play_pause_button that triggers play or pause
// currently not in use - could switch the button to this ID to have play pause.
/*playPauseButton.addEventListener("click", () => {
  if (isPlaying(theAudioPlayer)){
    theAudioPlayer.pause();
    if(Debug){console.log("turning off")}
  } else {
    // radio should be set by initialize, so that there is always something and else, static should play
    theAudioPlayer.load();
    theAudioPlayer.play();
    if(Debug){console.log("turning on")}
  }
});*/

pauseButton.addEventListener("click", () => {
  if(isPlaying(theAudioPlayer)){
    theAudioPlayer.pause();
    if(Debug){console.log("turning off")};
    var currentIndex = getCurrentRadioIndex(); 
    let buttonIDString = "rbutton"+currentIndex;
    let currentButton = document.getElementById(buttonIDString);
    if(Debug){console.log(currentButton)};
    currentButton.checked = false; //unset the index. 
  }
})

// checks if the player is currently playing music, used in the playPauseButton
function isPlaying(audioPlayer) {
  if (Debug){console.log(!audioPlayer.paused);}
  return !audioPlayer.paused;
}

// This could try to play an empty string... results in a 404 error - maybe this can be hidden as it is handled - but I guess, that's fine
// resolution for promise: https://stackoverflow.com/questions/38633615/javascript-audio-play-error
// Send a stream to the audioplayer
// Autoplay is not allowed - thus the user has to click something initially - hence the initial flag. If it's set, there is no autoplay
// TODO switching tooo fast creates an issue here (as the promise is not resolved, but user Input seems to create problems)
async function setCurrentStream(stream, initial){
    if (Debug){console.log(stream);}
    theAudioPlayer.src = stream;
    if (Debug){console.log("stream src assigned");}  
    theAudioPlayer.load();
    if (Debug){console.log("audio player reloaded");}

    // play with promise to catch fast switching
    // if "initial" is set to true, no autoplay
    if(!initial){
      var playPromise = theAudioPlayer.play(); 
      playPromise.then(function(){
        //automatic playback started successfully
      }).catch(function(error){
          playStatic(); 
          //setCurrentStream(staticLink); // play the static file
      }); 
    }
    if (Debug){console.log("audio player playing something");}  
}

// function to play static to catch errors
// could add a loop parameter to loop the static (or maybe just a tad bit longer static should work too - fade it out...)
function playStatic(){
  if (Debug){console.log("playing static")};
  theAudioPlayer.src = staticLink;
  theAudioPlayer.load();
  theAudioPlayer.loop = true;  
  theAudioPlayer.play(); 
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

/* ---------------------------------
Start Block
--------------------------------- */
initialize();
