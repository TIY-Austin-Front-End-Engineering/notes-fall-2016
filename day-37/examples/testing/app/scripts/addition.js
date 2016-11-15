export default function(a, b) {
	if (!Number(a) && a !== 0) {
		throw new Error(a + ' is not a number, check the first argument of addition');
	} else if (!Number(b) && b !== 0) {
		throw new Error(b + ' is not a number, check the second argument of addition');
	}
	return Number(a + b) || 0;
}
