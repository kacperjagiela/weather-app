const checkModulo = (number, modulo) => {
	let num = number;
	if (num === 24) num = 0;
	if (num % modulo === 0) {
		return num;
	}
	return checkModulo(num + 1, modulo);
};

export default checkModulo;
