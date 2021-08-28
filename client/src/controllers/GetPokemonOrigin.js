export const GetPokemonOrigin = (origin, array) => {
	switch (origin) {
		case 'API':
			return array.filter((el) => typeof el.id === 'number');

		case 'Companion App':
			let reg_ex = /-/;
			return array.filter((el) => el.id.toString().search(reg_ex) !== -1);

		case 'All':
			return array;

		default:
			return array;
	}
};
export default GetPokemonOrigin;
