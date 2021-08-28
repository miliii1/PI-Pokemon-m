import {PAGINATE_MAX} from '../utils/constants';
export const GetPokemonsViews = (array, min, max) => {
	if (!min && !max) {
		return array.slice(0, PAGINATE_MAX);
	}
	return array.slice(min, max);
};

export default GetPokemonsViews;
