import styled from 'styled-components';
// import image from '../../img/pokebolafondo.jpg'

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	
	.div_cards {
		display: flex;
		justify-content: center;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 0fr));
		grid-gap: 0px;
		width: 900px;
		height: 500px;

		.link {
			text-decoration: none;
			color: inherit;
		}

		.div_card {
			text-align: center;
			margin: 5px;
			height: 160px;

			.div_name {
				width: 190px;
				height: 30px;
				margin: 0px 0px 0px 0px;
				color: white;
				font-size: 25px;
			}
			.div_type_container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				.div_types {
					margin: 9px 0px 0px 7px;
					padding: 1px 1px 1px 1px;
					font-size: 18px;
					border-style: solid;
					border-color: black;
					border-width: 0px;
					border-radius: 6px;
					background-color: #fcf300;
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

					.p {
						margin: 0px 7px 0px 7px;
					}
				}
			}

			.img {
				margin: 0px 0px -10px -10px;
			}
			&:hover {
				box-shadow: 0 0 5px 0 #ffffff;
				transform: translateY(-3px);
				cursor: pointer;
			}
			&:active {
				outline: 0;
				transform: translateY(3px);
			}
		}
	}

	.div_back {
		width: 100px;
		color: white;
		text-shadow: 1px 2px 1px black;
		font-size: 20px;
		cursor: pointer;
		&:hover {
			transform: translateY(-3px);
			cursor: pointer;
		}
		&:active {
			outline: 0;
			transform: translateY(3px);
		}
	}
`;
