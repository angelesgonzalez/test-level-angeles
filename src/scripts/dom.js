export const form = document.getElementById("fizzBuzz-form");

export let createResultDiv = (round) => {
	const resultDiv = document.createElement("div");
	const resultHeader = document.createElement("h2");
	const resultText = document.createElement("p");
	resultHeader.textContent = round.data.output;
	resultText.textContent = round.message;
	resultDiv.append(resultHeader, resultText);
	return resultDiv;
};

export let updateHTML = (round) => {
	if (round.status === "Error") {
		round.classList.add("error");
	}

	let resultContainer = document.getElementById("result-container");
	let resultDiv = createResultDiv(round);
	resultContainer.appendChild(resultDiv);
};

export const clearAllInput = () => {
	let allInputs = document.querySelectorAll("input");
	allInputs.forEach((singleInput) => (singleInput.value = ""));
};
