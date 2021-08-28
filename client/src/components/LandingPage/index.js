import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';

export const LandingPage = () => {
	return (
		<StyledDiv>
			<div className='div_nav'>
				<h2 className='title'>Henry Pokemon</h2>
			</div>
			<div className='div_content'>
				<h3 className='h3'>BIENVENIDO</h3>
				<hr className='hr'></hr>
				<p className='p'>
				</p>
			</div>
			<div className='div_btn'>
				<Link to='/home'>
					<button className='btn'>Ingresar</button>
				</Link>
			</div>
		</StyledDiv>
	);
};

export default LandingPage;
