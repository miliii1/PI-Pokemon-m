import React from 'react';
import {StyledDiv} from './styled';

export const Filters = ({
	handleFilter,
	handleOrigin,
	handleTypes,
	pokemonsTypes,
}) => {
	return (
		<StyledDiv>
			<select name='Filter' onChange={(e) => handleFilter(e)}>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='More Attack'>More Attack</option>
				<option value='Less Attack'>Less Attack</option>
			</select>
			<select name='Type' onChange={(e) => handleTypes(e)}>
				<option value='All'>All</option>
				{pokemonsTypes &&
					pokemonsTypes.map((t, i) => (
						<option key={i} value={t.name}>
							{t.name}
						</option>
					))}
			</select>
			<select name='Origin' onChange={(e) => handleOrigin(e)}>
				<option value='All'>All</option>
				<option value='API'>API</option>
				<option value='Companion App'>Creadas</option>
			</select>
		</StyledDiv>
	);
};

export default Filters;
