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
		margin-top: -29px;


		.link {
			text-decoration: none;
			color: inherit;
		}

		.div_card {
			text-align: center;
			margin: 5px;
			height: 160px;
			background-color: rgba(15, 15, 15, 0.486);
			border: 2px solid transparent;
	border-color: black;
    display: inline-table;
    border-radius: 0.65rem;

	

			.div_name {
				font-family: font-weight: bold;
				font-size: large;;
				width: 190px;
				height: 30px;
				margin: 0px 0px 0px 0px;
				color: black;
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
					background-color: lime;
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

					.p {
						margin: 0px 7px 0px 7px;
					}
				}
			}

			.img {
	width: 90px;
    border-radius: 8rem;
    box-shadow: 3px 3px 3px rgb(75, 75, 75);
	border: 1px solid rgba(10, 10, 10, 0.726);

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
