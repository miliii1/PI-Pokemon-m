import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';
// import {titulo} from '../../img/titulo.png'

export const Nav = () => {
	return (
		<StyledDiv>
			<div className='div_logo'>
				<Link to='/' className='logo'>
					<h2>Henry Pokemon</h2>
				</Link>
			</div>
			<div className='div_menu'>
				<div className='div_link'>
					<Link to='/home' className='link'>
						HOME
					</Link>
				</div>
				<div className='div_link'>
					<Link to='/create' className='link'>
						CREAR POKEMON
					</Link>
				</div>
			</div>
		</StyledDiv>
	);
};

export default Nav;
