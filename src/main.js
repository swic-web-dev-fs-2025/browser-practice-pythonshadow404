import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1 class="text-3xl font-bold underline">
//     Hello Vite!
//   </h1>
// `;

// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Greeting";
resetButton.id = "reset-greeting";

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;

  // Change color after 5 clicks
  if (clickCount === 5) {
    greetingElement.style.color = "#ff5722";
  }
}

function resetGreeting() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

// Event listener - this is new! Responds to user interaction
button.addEventListener("click", updateGreeting);
resetButton.addEventListener("click", resetGreeting);

// Add reset button to the DOM
button.insertAdjacentElement("afterend", resetButton);

const textBox = document.createElement("input");
textBox.type = "text";
textBox.id = "name-input";
textBox.placeholder = "Enter Custom Greeting";
button.insertAdjacentElement("beforebegin", textBox);
