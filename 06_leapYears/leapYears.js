const leapYears = function(year) {
	if (year % 4 !== 0) {
		return false;
	}

	// Years divisible by 100 are not leap years, unless they are divisible by 400 as well
	if (year % 100 === 0 && year % 400 !== 0) {
		return false;
	}

	return true;
};

// Do not edit below this line
module.exports = leapYears;
