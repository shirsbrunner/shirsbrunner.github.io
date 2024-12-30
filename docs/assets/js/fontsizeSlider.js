//this gives interaction to the slider on typepreview by removing or adding utopia-classes
const value = document.querySelector("#fontsizeSelector");
const input = document.querySelector("#fontsizeSelector");
value.textContent = input.value;

// fix the type-sample-field
const class_list = document.getElementById('type-sample').classList;

//console.log("I have been loaded");

input.addEventListener("input", (event) => {
    console.log(event.target.value);
    removeFontsizeElements(class_list);
    addFontsizeElement(event.target.value); 
    //value.textContent = event.target.value;
});

// this removes all old classes
function removeFontsizeElements() {
    console.log("remove was called");
    class_list.remove("typeSize-1","typeSize0","typeSize1","typeSize2","typeSize3","typeSize4","typeSize5","typeSize6" ); //remove all strange classes
}

// this concatenates and adds the new class
function addFontsizeElement(eventValue) {
    console.log("add was called"); 
    let newClass = "typeSize";
    newClass += eventValue;  
    class_list.add(newClass)
}

