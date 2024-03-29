import React from 'react';
import {NavLink} from 'react-router-dom';


export const Home = ({id, name, types, sprite, pokemonFilter, handleClick}) => {
	const color = types.map(type => {
        return type.name
    }).join(" ")
	return (
		<div>
			{pokemonFilter === 'Search' ? (
				<div value={'All'} onClick={handleClick} className='div_back'>
					{'◀◀'}
				</div>
			) : null}
			<NavLink to={`/pokemon/${id}`} className='link'>
				<div className={`div_card ${color}`}> 
				{/* <img className={`pokemon-home-image ${color}`} src={image} alt='loading'></img> */}
					<img className='img' src={sprite} alt='Sprite' />
					<div className='div_name'>{name}</div>
					<div className='div_type_container'>
						{types &&
							types.map((el, i) => (
								<div key={i} className='div_types'>
									<p key={i} className='p'>
										{el.name}
									</p>
								</div>
							))}
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default Home;
