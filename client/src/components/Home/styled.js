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
		.unset {
			background-color: rgb(233, 237, 245);
		}
		.fire{
			background-color: rgba(252, 6, 6, 0.37);
			border: 2px solid transparent;
	        border-color: red;
		}
		.water{
			background-color: rgba(0, 84, 240, 0.39);
			border: 2px solid transparent;
	        border-color: rgba(0, 84, 240, 0.959);
		}
		.poison {
			background-color: rgba(248, 44, 200, 0.479);
			border: 2px solid transparent;
	        border-color: rgba(248, 44, 200, 0.87);
		}
		.normal{
			background-color: rgba(15, 15, 15, 0.486);
			border: 2px solid transparent;
	        border-color: black;
		}
		.grass {
			background-color: rgba(6, 247, 6, 0.404);
			border: 2px solid transparent;
	        border-color: rgba(6, 247, 6, 0.767);
		}
		.bug {
			background-color: rgba(157, 6, 245, 0.432);
			border: 2px solid transparent;
	        border-color: rgba(157, 6, 245, 0.87);
		}
		.electric {
			background-color: rgba(248, 232, 0, 0.452);
			border: 2px solid transparent;
	        border-color: rgba(248, 232, 0, 0.932);
		}
		.ground {
			background-color: rgba(255, 115, 0, 0.548);
			border: 2px solid transparent;
	        border-color: rgba(255, 115, 0, 0.959);
		}
		.fairy {
			background-color: rgba(12, 16, 245, 0.473);
			border: 2px solid transparent;
	        border-color: rgba(12, 16, 245, 0.808);
		}

		.link {
			text-decoration: none;
			color: inherit;
		}

		.div_card {
			text-align: center;
			margin: 5px;
			height: 160px;
			// background-color: rgba(15, 15, 15, 0.486);
			// border: 2px solid transparent;
	        // border-color: black;
            display: inline-table;
            border-radius: 0.65rem;
	        margin-top: 3px;
	
	

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
					border-color: white;
					border-width: 0px;
					border-radius: 6px;
					background-color: white;
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
		width: 290px;
		color: white;
		text-shadow: 1px 2px 1px black;
		font-size: 20px;
		cursor: pointer;
		margin-top: 3px;
		margin-block-end: 17px;
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
