
// Completely not necessary things
// setup
const deco_element = document.getElementById('header_deco');
const deco_array = ["moon", "sun", "star", "fish", "beholder", "oneup", "uxally"]

const start_hero_text = document.getElementById('start_hero_text');
const hero_array = ["Log-Place", "Notes-Area", "Stuff-Heap", "Things-Spot"]

// initialize
flavourize();
headerize(); 
flavoursole(); 

function flavourize(){
    if(deco_element){
        const new_decoration = deco_array[Math.floor(Math.random() * deco_array.length)];
        deco_element.innerHTML=new_decoration
    }
}

function headerize(){
    if(start_hero_text){
        const new_text = hero_array[Math.floor(Math.random() * hero_array.length)];
        start_hero_text.innerHTML=new_text
    }
}

// I saw something like this at henrys place
// part of the face is from the amazing https://kaomojicool.club/
function flavoursole(){
        console.log(" \n"+
        " .%%%%%%%% \n"+
        "ᕦ⸨○⬤ᴜ⬤○⸩ᕤ\n"+
        "     –-      \n"+
        "           \n"+
        "Welcome to the inner circle!\nI'm glad you found me, but keep it a secret, this is just a place for you and me!\n"+
        "You can rest and recharge here safely, before going back into the wild wild web!\n"+
        " ")
}