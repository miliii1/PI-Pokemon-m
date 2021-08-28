export const GetPokemonType = (type, array) => {
	if (type === 'All') return array;
	let newArray = array.filter((el, i) =>
		el.Types.length
			? el.Types[0].name === type
				? true
				: el.Types.length > 1
				? el.Types[1] === type
					? true
					: false
				: false
			: false
	);
	return newArray;
};

export default GetPokemonType;
