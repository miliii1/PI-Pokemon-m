import React, {useEffect, useState} from 'react';
import {StyledDiv} from './styled';
import {connect} from 'react-redux';
import {setPokemonsViews} from '../../actions';
import Paginated from './index';
import {PAGINATE_MAX} from '../../utils/constants';

export const Paginatecontainer = ({setPokemonsViews, pokemonViews}) => {
	const [Paged, setPaged] = useState({page: 1, max: 12, min: 0});
	const [Paginate, setPaginate] = useState(1);
	let listArray = Array.from({length: Paginate}, (e, i) => i + 1);

	useEffect(() => {
		setPokemonsViews(Paged);
	}, [Paged]);

	useEffect(() => {
		setPaginate(Math.ceil(pokemonViews.all.length / PAGINATE_MAX));
	}, [pokemonViews]);

	const handleClick = (e) => {
		setPaged({
			page: e.target.value, // 2
			max: PAGINATE_MAX * e.target.value, // 24
			min: PAGINATE_MAX * e.target.value - PAGINATE_MAX, //12
			
		});
	};

	return (
		<StyledDiv>
			{listArray.length ? (
				<div className='div_container'>
					{listArray &&
						listArray.map((el, i) => (
							<div key={i} className='div_list'>
								<Paginated
									li={
										<li
											key={i}
											className={el === Paged.page ? 'listed' : 'list'}
											value={el}
											onClick={(e) => handleClick(e)}
										>
											{el}
										</li>
									}
								/>
							</div>
						))}
				</div>
			) : null}
		</StyledDiv>
	);
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
		pokemonViews: state.pokemonViews,
		pokemonFilter: state.pokemonFilter,
	};
};

export default connect(mapStateToProps, {setPokemonsViews})(Paginatecontainer);