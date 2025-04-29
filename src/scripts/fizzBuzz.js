export let fizzBuzz = (number) => {
	let result = {};

	if (isNaN(number)) {
		result = {
			status: `Error`,
			message: `${number}, is not a number.`,
			data: {
				input: number,
				output: "Error",
			},
		};
	}

	if (number % 5 === 0 && number % 3 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 3 & 5.`,
			data: {
				input: number,
				output: "FizzBuzz", 
			},
		};
	} else if (number % 3 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 3.`,
			data: {
				input: number,
				output: "Fizz",
			},
		};
	} else if (number % 5 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 5.`,
			data: {
				input: number,
				output: "Buzz",
			},
		};
	} else {
		result = {
			status: `Ok`,
			message: `${number} is not divisible neither by 5 or 3.`,
			data: {
				input: number,
				output: number,
			},
		};
	}

	return result;
};
