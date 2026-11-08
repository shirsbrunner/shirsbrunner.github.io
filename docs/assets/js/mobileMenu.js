/* ---------------------------------
Dialog-Stuff, based on 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
--------------------------------- */
const mobileMenuDialog = document.getElementById("mobileMenuDialog");
const menuShowButton = document.getElementById("menuButton");
const menuCloseButton = document.getElementById("menuCloseButton");

// "Show the dialog" button opens the dialog modally
menuShowButton.addEventListener("click", () => {
  mobileMenuDialog.showModal();
});

// "Close" button closes the dialog
menuCloseButton.addEventListener("click", () => {
  mobileMenuDialog.close();
});

// TODO: Close on resize else, switching to landscape eliminates interaction...
window.addEventListener('resize', function(event){
  mobileMenuDialog.close(); 
});
