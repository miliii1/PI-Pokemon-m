import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';
// import logo from '../../img/titulo.png';


export const LandingPage = () => {
	return (
		<StyledDiv>
			<div className='div_content'>
			<heade className='logo-landing'>
                <img src={'https://64.media.tumblr.com/tumblr_m113w41Mla1rrv14xo1_500.gif'} />
            </heade>
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
