import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 140px;

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
			margin: -220px 0px 0px 460px;
			

			.text {
				line-height: 50px;
				font-size: 25px;
				color: black;
				text-shadow: 1px 2px 2px black;
				font-family: consolas;
                font-weight: bold;
			}
			.id {
				font-size: 10px;
				color: white;
				display: flex;
				justify-content: center;
				margin: 190px 0px 0px 50px;
			}
		}

		.div_title {
			display: flex;
			justify-content: center;
			margin: -38px 0px 0px 0px;
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
					margin: 9px 0px 0px 35px;
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
	         height: 205px;
			 margin-right: 506px;
			 margin-top: 45px;
				
				&:hover {
					transform: scaleX(-1);
				}
			}
		}
	}
`;
