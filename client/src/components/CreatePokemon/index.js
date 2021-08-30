import React from 'react';
import {StyledDiv} from './styled';
import silueta from '../../img/silueta.png'

export const Create = ({
	handleSubmit,
	handleChange,
	handleTypes,
	handleSprite,
	forms,
	pokemonsTypes,
	Types,
	Errors,
	Alert,
	sprites,
	sprite,
}) => {
	return (
		<StyledDiv>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='div_g'>
					<div>
						<h1 className='title'>Crear Pokemon</h1>
					</div>
					{Alert.errors ? (
						<div className='div_errors'>
							<ul>
								{Object.values(Errors).map((el) => (
									<p key={el} className='li_text'>
										{el}
									</p>
								))}
							</ul>
						</div>
					) : null}
					<div className='div_sprite'>
						<div className='div_img'>
							<img className='img' src={silueta} alt='Sprite' />
						</div>
					</div>
					{forms &&
						forms.map((el, i) => (
							<div key={i} className='div_f'>
								<div key={i} className='div_label'>
									<label key={i} className='label'>
										{el.label}:
									</label>
								</div>
								<input
									className='input'
									key={el.name}
									name={el.name}
									type='text'
									autoComplete='off'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						))}
					<div className='div_types'>
						<select onChange={(e) => handleTypes(e)}>
							{pokemonsTypes &&
								pokemonsTypes.map((t, i) => (
									<option key={i} value={t.name}>
										{t.name}
									</option>
								))}
						</select>
						<div className='div_type_container'>
							{Types &&
								Types.map((el, i) => (
									<div key={i} className='div_type'>
										<label className='label'>{el}</label>
									</div>
								))}
						</div>
					</div>
					<div className='div_submit'>
						<button className='btn_submit' type='submit'>
							Crear Pokemon
						</button>
					</div>
					{Alert.create ? (
						<div className='div_create_confirm'>
							<h3 className='message_create'>
								!El Pokemon se ha creado exitosamente!
							</h3>
						</div>
					) : null}
				</div>
			</form>
		</StyledDiv>
	);
};

export default Create;
