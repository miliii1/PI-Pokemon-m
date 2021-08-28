import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 330px;

	.div_card {
		display: flex;
		display: table;
		list-style: none;
		margin: 0px 0px 0px 0px;
		width: 600px;
		height: 400px;

		.div_details {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 0fr));
			grid-gap: 0px;
			margin: 70px 0px 0px 140px;

			.text {
				line-height: 50px;
				font-size: 20px;
				color: white;
				text-shadow: 1px 2px 2px black;
			}
			.id {
				font-size: 10px;
				color: white;
				display: flex;
				justify-content: center;
				margin: 30px 0px 0px 120px;
			}
		}

		.div_title {
			display: flex;
			justify-content: center;
			margin: -13px 0px 0px 0px;
			width: auto;
			height: 60px;
			color: white;
			font-size: 25px;
			text-shadow: 1px 1px 1px black;
		}

		.div_img {
			display: table;
			width: 100px;
			height: 100px;
			margin: 0px 0px 0px 230px;

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
				margin: 0px 0px 0px 15px;
				background-color: white;
				border-radius: 100%;
				box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.4);
				&:hover {
					transform: scaleX(-1);
				}
			}
		}
	}
`;
