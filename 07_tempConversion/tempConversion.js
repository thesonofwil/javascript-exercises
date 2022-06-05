const ftoc = function(tempF) { // Farenheit to Celsius
	let tempC = (tempF - 32) * 5 / 9;
	return Math.round(tempC * 10) / 10;
};

const ctof = function(tempC) { // Celsius to Farenheit
	let tempF = (tempC * 9 / 5) + 32;
	return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
