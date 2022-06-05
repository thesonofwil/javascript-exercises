const removeFromArray = function(...args) {
	let arr = args[0]; // first item is array to iterate through
	let resultArr = [];

	arr.forEach((item) => {

		// Check if arr item matches with any args, and push if not
		if (!args.includes(item)) {
			resultArr.push(item);
		}
	});

	return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
