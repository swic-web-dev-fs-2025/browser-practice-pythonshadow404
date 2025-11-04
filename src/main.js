// 1. Initialize click count variable
let clickCount = 0;

// 2. Get references to the HTML elements
const greetingElement = document.getElementById("greeting");
const increaseButton = document.getElementById("increase-count");
const decreaseButton = document.getElementById("decrease-count");
const resetButton = document.getElementById("reset");
const countElement = document.getElementById("click-count");

// 3. Define the Function to update the count
function increaseCount() {
  clickCount++;
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount === 10) {
    document.body.style.backgroundColor = "lightblue";
  }
}

function decreaseCount() {
  if (clickCount > 0) {
    clickCount--;
    countElement.textContent = `Button clicks: ${clickCount}`;
  }
}

function resetCount() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

// 5. Add Event Listener to the button
increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
