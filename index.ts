// Import stylesheets
import "./style.css";

// Function to check for factorial of a number
function factorial(n: number): number {
  if (Number.isInteger(n) && n >= 0)
    return n > 1 ? n * factorial(n - 1) : 1
  else
    throw new Error('Invalid number')
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>${factorial(9)}</h1>`;
