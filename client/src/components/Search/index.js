import React from 'react';
import {StyledDiv} from './styled';
import {ICONO} from '../../utils/constants'

export const Search = ({handleSubmit, handleChange}) => {
	return (
		<StyledDiv>
			<div className='div_menu'>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						className='input'
						type='text'
						placeholder='Buscar...'
						autoComplete='off'
						onChange={(e) => handleChange(e)}
					/>
					<div className='div_btn'>
						<button className='btn_seatch' type='submit'>
						<img alt='loading' className='searchIcon' src={ICONO}></img>
						</button>
					</div>
				</form>
			</div>
		</StyledDiv>
	);
};

export default Search;
