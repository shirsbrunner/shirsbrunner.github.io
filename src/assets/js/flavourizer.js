
// setup
const deco_element = document.getElementById('header_deco');
const deco_array = ["moon", "sun", "star", "fish", "beholder", "oneup", "uxally"]

const start_hero_text = document.getElementById('start_hero_text');
const hero_array = ["Snippets-Area", "Notes-Location", "Stuff-Place", "Things-Spot"]

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

function flavoursole(){
        console.log("Welcome to the inner circle! I'm glad you found me, but don't tell anybody, this is just between me and you!")
}