// get a list of all variableAxisSliders
const variable_sliders_list = document.querySelectorAll('.variableRangeInput')
const type_sample = document.getElementById('type-sample')
//console.log(type_sample)
//console.log(variable_sliders_list)

// TODO not sure why, but the sliders seem to be resetting the other axis...
// font-variation-settings needs to set all axis at the same time - so each of these would need to set both. 
// maybe I can get the current font-variation-settings? 

// attach a listener to each one of them (using a loop here)
for (let i = 0; i < variable_sliders_list.length; i++) {
    let currentSlider = variable_sliders_list[i]
    //console.log(currentSlider)
    // get the relevant information out of the sliders definition (name, and the two bounds)
    let axisName = currentSlider.name
    //console.log(axisName)

    currentSlider.addEventListener("input", (event) => {
        //console.log(event.target.value);
        updateCSS(axisName, event.target.value)
    });
}

// this updates the CSS of any given class with Input of the Axis and the new Value
function updateCSS(variableAxis, newValue) {
    console.log("update was called" + variableAxis)
    type_sample.style.fontVariationSettings= '"'+variableAxis +'"'+ newValue
}


