// variables




// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // create the <option> for the years
  const html = new HTMLUI();
  html.displayYears();
});



// objects
function HTMLUI() {} 

// Displays the latest 20 years in the select

HTMLUI.prototype.displayYears = function() {
  // Max and Min years
  const max = new Date().getFullYear();
        // min = max - 20;
  console.log(max);
} 