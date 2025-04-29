import { clearAllInput, form, createResultDiv, updateHTML } from "./dom.js";
import { fizzBuzz } from "./fizzBuzz.js";
import { rounds } from "./rounds.js";

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let numberInput = +document.getElementById("number-input").value;
	let result = fizzBuzz(numberInput);
	rounds.push(result);
	updateHTML(result);
	clearAllInput();
});
