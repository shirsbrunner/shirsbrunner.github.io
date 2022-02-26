const DM_BTN = document.querySelector(".dmbtntoggler");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

//console.log(DM_BTN);
//console.log(prefersDarkScheme);

// Listen for a click on the button 
DM_BTN.addEventListener("click", function() {
    //alert("Behold the button is working!!");
    // If the OS is set to dark mode...
    if (prefersDarkScheme.matches) {
      // ...then apply the .light-theme class to override those styles
      //put media to light-theme? 
      console.log("now switching to light")
      document.documentElement.classList.toggle("light");
      // Otherwise...
    } else {
      // ...apply the .dark-theme class to override the default light styles
      console.log("now switching to dark")
      document.documentElement.classList.toggle("dark");
    }
  });
