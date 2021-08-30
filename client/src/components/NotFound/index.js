import React from 'react';
import img from '../../img/animal.gif';
import {StyledDiv} from './styled';

const NotFound = ({handleClick}) => {
	return (
		<>
			<div value={'All'} onClick={handleClick} className='div_back'>
				{'< BACK'}
			</div>
			<StyledDiv>
				<div className='div_title'>
					<h2 className='title'>No ha encontrado Pokemons</h2>
				</div>
				<div className='div_img'>
					<img className='img' src={img} alt='404' />
				</div>
			</StyledDiv>
		</>
	);
};

export default NotFound;
