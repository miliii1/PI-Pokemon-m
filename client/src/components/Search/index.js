import React from 'react';
import {StyledDiv} from './styled';

export const Search = ({handleSubmit, handleChange}) => {
	return (
		<StyledDiv>
			<div className='div_menu'>
				<div className='div_title'>
					<h2 className='title'>Search a Pokemon</h2>
				</div>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input
						className='input'
						type='text'
						autoComplete='off'
						onChange={(e) => handleChange(e)}
					/>
					<div className='div_btn'>
						<button className='btn_seatch' type='submit'>
							Search
						</button>
					</div>
				</form>
			</div>
		</StyledDiv>
	);
};

export default Search;
