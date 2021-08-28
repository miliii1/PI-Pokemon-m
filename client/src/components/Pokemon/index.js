import React from 'react';
import {FORMS} from '../../utils/constants';
import {StyledDiv} from './styled';

const Pokemon = ({
	id,
	name,
	hp,
	attack,
	defense,
	speed,
	height,
	weight,
	types,
	sprite,
}) => {
	return (
		<StyledDiv>
			<div className='div_card'>
				<div className='div_img'>
					<img src={sprite} className='img' alt='sprite' />
					<div className='div_type_container'>
						{types &&
							types.map((el, i) => (
								<div key={i} className='div_types'>
									<p key={el.name} className='p'>
										{el.name}
									</p>
								</div>
							))}
					</div>
				</div>
				<div className='div_title'>
					<h1>{name.toUpperCase()}</h1>
				</div>
				<div className='div_details'>
					{FORMS &&
						FORMS.map((el, i) =>
							i > 0 ? (
								<div key={el.name} className='text'>
									{el.label}: {eval(el.name)}
								</div>
							) : null
						)}
					<div className='id'>ID:{id}</div>
				</div>
			</div>
		</StyledDiv>
	);
};

export default Pokemon;
