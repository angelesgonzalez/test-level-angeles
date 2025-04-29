export let fizzBuzz = (number) => {
	let result = {};

	if (isNaN(number)) {
		result = {
			status: `Error`,
			message: `${number}, is not a number.`,
			data: `${number}`,
			output: `Error.`,
		};
	}

	if (number % 5 === 0 && number % 3 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 3 & 5.`,
			data: `${number}`,
			output: `FizzBuzz`,
		};
	} else if (number % 3 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 3.`,
			data: `${number}`,
			output: `Fizz`,
		};
	} else if (number % 5 === 0) {
		result = {
			status: `Ok`,
			message: `${number} is divisible by 5.`,
			data: `${number}`,
			output: `Buzz`,
		};
	} else {
		result = {
			status: `Ok`,
			message: `${number} is not divisible neither by 5 or 3.`,
			data: `${number}`,
			output: `${number}`,
		};
	}

	return result;
};
