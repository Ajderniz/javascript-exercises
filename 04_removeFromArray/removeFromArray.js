const removeFromArray = function(rArray, ...rArgs) {
	return rArray.filter(x => !rArgs.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
