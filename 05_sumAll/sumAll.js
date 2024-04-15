const sumAll = function(iNumber1, iNumber2) {

	if (iNumber1 < 0 || iNumber2 < 0) {
		return 'ERROR';
	} //end if
	if (!Number.isInteger(iNumber1) || !Number.isInteger(iNumber2)) {
		return 'ERROR';
	} //end if
	if (iNumber1 > iNumber2) {
		//swap
		const iTemp = iNumber1;
		iNumber1 = iNumber2;
		iNumber2 = iTemp;
	} //end if

	let iSum = 0;
	for (let iIndex = iNumber1; iIndex <= iNumber2; iIndex++) {
		iSum += iIndex;
	} //end for

	return iSum;

};

// Do not edit below this line
module.exports = sumAll;
