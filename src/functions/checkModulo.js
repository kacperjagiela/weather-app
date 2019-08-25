const checkModulo = (number, modulo) => {
	if (number % modulo === 0) {
		return number;
	}
	return checkModulo(number + 1, modulo);
};

export default checkModulo;
