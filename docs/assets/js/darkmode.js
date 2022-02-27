const DM_BTN = document.querySelector(".dmbtntoggler");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme"); //checks for previously saved darkmode

if (currentTheme == "dark"){
  //toggle the dark theme
  document.documentElement.classList.toggle("dark");
  document.getElementsByClassName("dmbtntoggler")[0].innerHTML = "Sun";
} else if (currentTheme == "light") {
  //toggle light
  document.documentElement.classList.toggle("light");
  document.getElementsByClassName("dmbtntoggler")[0].innerHTML = "Moon";
}

// Listen for a click on the button 
DM_BTN.addEventListener("click", function() {

    // If the OS is set to dark mode...
    if (prefersDarkScheme.matches) {
      // ...then apply the .light-theme class to override those styles
      //put media to light-theme? 
      console.log("now switching to light?")
      document.documentElement.classList.toggle("light");
      //but use dark-mode if light mode is already set
      var theme = document.documentElement.classList.contains("light") ? "light" : "dark";
      console.log(theme);
      // Otherwise...

    } else {
      // ...apply the .dark-theme class to override the default light styles
      console.log("now switching to dark?")
      document.documentElement.classList.toggle("dark");
      var theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      console.log(theme);
    }
     /*toggle the icon*/ 
    if(theme == "dark"){
      document.getElementsByClassName("dmbtntoggler")[0].innerHTML = "Sun";
    } else {
      document.getElementsByClassName("dmbtntoggler")[0].innerHTML = "Moon";
    }

    //save the current seting
    localStorage.setItem("theme", theme);


  });
