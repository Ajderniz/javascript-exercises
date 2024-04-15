const repeatString = function(sString, iTimes) {

	if (iTimes < 0) {
		return 'ERROR';
	} //end if

	let sReturnString = '';
	for (let iIndex = 0; iIndex < iTimes; iIndex++) {
		sReturnString += sString;
	} //end for
	return sReturnString;
};

// Do not edit below this line
module.exports = repeatString;
