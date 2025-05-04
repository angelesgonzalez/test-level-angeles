export const form = document.getElementById("fizzBuzz-form");

export let createResultDiv = (round) => {
	const resultDiv = document.createElement("div");
	const resultHeader = document.createElement("h2");
	const resultText = document.createElement("p");
	resultHeader.textContent = round.data.output;
	resultText.textContent = round.message;
	resultDiv.classList.add("result");
	resultDiv.append(resultHeader, resultText);
	return resultDiv;
};

export let updateHTML = (round) => {
	let resultContainer = document.getElementById("result-container");
	let errorContainer = document.getElementById("error-container");

	errorContainer.textContent = "";
	errorContainer.style.display = "none";

	if (round.status === "Error") {
		errorContainer.textContent = round.message;
		errorContainer.style.display = "block";
		return;
	}

	let resultDiv = createResultDiv(round);
	resultContainer.appendChild(resultDiv);
};

export const clearAllInput = () => {
	let allInputs = document.querySelectorAll("input");
	allInputs.forEach((singleInput) => (singleInput.value = ""));
};
