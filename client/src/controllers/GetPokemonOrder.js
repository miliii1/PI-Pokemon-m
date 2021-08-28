export const GetPokemonOrder = (order, array) => {
	switch (order) {
		case 'A-Z':
			return array.sort((a, b) => {
				if (a.name > b.name) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Z-A':
			return array.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'More Attack':
			return array.sort((a, b) => {
				if (a.attack < b.attack) {
					return 1;
				} else {
					return -1;
				}
			});
		case 'Less Attack':
			return array.sort((a, b) => {
				if (a.attack > b.attack) {
					return 1;
				} else {
					return -1;
				}
			});

		default:
			return array;
	}
};
export default GetPokemonOrder;