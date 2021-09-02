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
			<span>ORDER BY</span>
			<select name='Filter' onChange={(e) => handleFilter(e)}>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='Attack +'>Attack +</option>
				<option value='Attack -'>Attack -</option>

			</select>
			<span>SELECT</span>
			<select name='Type' onChange={(e) => handleTypes(e)}>
				<option value='All'>TODOS</option>
				{pokemonsTypes &&
					pokemonsTypes.map((t, i) => (
						<option key={i} value={t.name}>
							{t.name}
						</option>
					))}
			</select>
			<span>FROM</span>
			<select name='Origin' onChange={(e) => handleOrigin(e)}>
				<option value='All'>TODOS</option>
				<option value='API'>API</option>
				<option value='Henry Pokemon'>Creadas</option>
			</select>
		</StyledDiv>
	);
};

export default Filters;
