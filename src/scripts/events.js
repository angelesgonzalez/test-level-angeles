import { clearAllInput, form, createResultDiv, updateHTML } from "./dom.js";
import { fizzBuzz } from "./fizzBuzz.js";
import { rounds } from "./rounds.js";

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let numberInput = 0;

	try {
		numberInput = document.getElementById("number-input").value;
		const parsedNumber = Number(numberInput);

		if (isNaN(parsedNumber)) {
			throw new Error("Not a valid number");
		}

		let result = fizzBuzz(parsedNumber);

		updateHTML(result);

		if (result.status === "Ok") {
			rounds.push(result);
		}
	} catch (error) {
		updateHTML({
			status: "Error",
			message: "There's an error. Please introduce only numbers.",
			data: { input: numberInput, output: "Error" },
		});
	}

	clearAllInput();
});
