// get a list of all variableAxisSliders
const variable_sliders_list = document.querySelectorAll('.variableRangeInput')
const type_sample = document.getElementById('type-sample')

// NOTE: font-variation-settings needs to set all axis at the same time - so each of these would need to set both. 

let temp_variable_axis_definition = "" //this sets the base for the concatenated axis

for (let i = 0; i < variable_sliders_list.length; i++) {
    let currentSlider = variable_sliders_list[i]
    //console.log(currentSlider)
    // get the relevant information out of the sliders definition (name, and the two bounds)
    let axisName = currentSlider.name
    
    //Create a css-variable - this will be set by the slider, and defines the variable axis.
    this["--variable_var"+i] = currentSlider.start
    //set the CSS-Variable to the defined value - without this all sliders need to be move to make a change
    type_sample.style.setProperty("--variable_var"+i, currentSlider.value)
    
    //concatenate the string, that will in the end be attached to the type_sample
    temp_variable_axis_definition+='"'+axisName+'" '+"var(--variable_var"+i+")"

    // add a comma to the concatenation unless it's the last loop
    if(i < variable_sliders_list.length-1){
        temp_variable_axis_definition += ", "
    }    

    //Append an event listener to the current Input and have it change the variable on change
    currentSlider.addEventListener("input", (event) => {
        //console.log(event.target.value);
        //updateCSS(axisName, event.target.value)
        temp_var_string = "--variable_var"+i
        //axisName needs to be the variable to be updated
        updateCSSvar(temp_var_string, event.target.value)
    });

    //if this is the last in the loop, attach the style to the text
    if (i==variable_sliders_list.length-1){
        type_sample.style.fontVariationSettings = temp_variable_axis_definition
    }
}

//type_sample.style.fontVariationSettings=
function updateCSSvar(variable, value) {
    console.log("update was called" + variable)
    //This needs to set the variable
    type_sample.style.setProperty(variable, value)
    //fontVariationSettings= '"'+variableAxis +'"'+ newValue
}

