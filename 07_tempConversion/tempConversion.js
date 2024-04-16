function roundDecimal(fDecimal) {
	return Math.round(fDecimal * 10) / 10;
} //end roundDecimal

const convertToCelsius = function(fFahrenheit) {
	return roundDecimal((fFahrenheit - 32) / 1.8);
};

const convertToFahrenheit = function(fCelsius) {
	return roundDecimal((fCelsius * 1.8) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
