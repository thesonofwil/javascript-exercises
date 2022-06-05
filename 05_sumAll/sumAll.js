const sumAll = function(num1, num2) {
	if (typeof num1 != 'number' || typeof num2 != 'number') {
		return 'ERROR';
	} else if (num1 < 0 || num2 < 0) {
		return 'ERROR';
	}

	let start;
	let end;
	
	// Define the range to sum through
	if (num2 > num1) {
		start = num1;
		end = num2;
	} else {
		start = num2;
		end = num1;
	}
	
	// Sum all numbers between, inclusive
	let sum = 0;
	for (let n = start; n <= end; n++) {
		sum += n;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
