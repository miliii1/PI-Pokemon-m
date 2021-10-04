import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getPokemonSearch} from '../../actions';
import Search from './index';
import Filter from '../Filters/FiltersContainer';

export const SearchContainer = ({getPokemonSearch}) => {
	const [Name, setName] = useState();

	const handleChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (Name.length) {
			getPokemonSearch(Name);
		}
	};

	return (
		<div>
			<Search handleChange={handleChange} handleSubmit={handleSubmit} />
			<Filter />
		</div>
	);
};

export default connect(null, {getPokemonSearch})(SearchContainer);
