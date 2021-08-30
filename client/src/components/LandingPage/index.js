import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';
import logo from '../../img/titulo.png'

export const LandingPage = () => {
	return (
		<StyledDiv>
			<div className='div_content'>
			<div>
                <img className='logo-landing' src={logo}/>
            </div>
				<h3 className='h3'>BIENVENIDO</h3>
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
