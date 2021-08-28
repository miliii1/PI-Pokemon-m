import React from 'react';
import Filters from './index';
import {connect} from 'react-redux';
import {
	setPokemonsOrder,
	setPokemonsOrigin,
	setPokemonsType,
} from '../../actions';

const FiltersContainer = ({
	setPokemonsOrder,
	setPokemonsOrigin,
	setPokemonsType,
	pokemonsTypes,
}) => {
	const handleFilter = (e) => {
		setPokemonsOrder(e.target.value);
	};

	const handleOrigin = (e) => {
		setPokemonsOrigin(e.target.value);
	};
	const handleTypes = (e) => {
		setPokemonsType(e.target.value);
	};

	return (
		<div>
			<Filters
				handleFilter={handleFilter}
				handleOrigin={handleOrigin}
				handleTypes={handleTypes}
				pokemonsTypes={pokemonsTypes}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pokemonsTypes: state.pokemonsTypes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPokemonsOrder: (order) => dispatch(setPokemonsOrder(order)),
		setPokemonsOrigin: (origin) => dispatch(setPokemonsOrigin(origin)),
		setPokemonsType: (type) => dispatch(setPokemonsType(type)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
