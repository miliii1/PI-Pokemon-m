import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0px 0px 0px;

	.div_sprite {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: -30px 0px 10px 0px;
		width: fit-content;
		height: fit-content;

		.img {
			margin: 0px 0px 15px 0px;
			background-color: white;
			border-radius: 100%;
			box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.4);
		}
		.div_f_sprite {
			display: flex;
			justify-content: center;
		}
	}

	.div_g {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		width: fit-content;
		height: fit-content;
		background-color: rgba(0, 0, 0, 0.55);
        border-radius: 38px;
        width: 536px;
		margin-top: 49px;

		.title {
			color: white;
			font-size: 50px;
			text-shadow: 3px 2px 4px black;
		}
		.div_create_confirm {
			background-color: #0ead69;
			text-align: justify;
			width: fit-content;
			height: fit-content;
			border-radius: 5px;
			margin: 30px 0px 0px 0px;

			.message_create {
				font-size: 18px;
				padding: 0px 10px 0px 10px;
				text-shadow: 1px 1px 1px black;
				color: white;
			}
		}
		.div_errors {
			background-color: rgba(230, 57, 70, 0.7);
			text-align: justify;
			width: fit-content;
			height: fit-content;
			border-radius: 5px;
			padding: 15px;
			margin: -20px 0px 20px 0px;

			ul {
				padding: 0px;
				margin: 0px 0px 0px 10px;
			}

			.li_text {
				padding: 0px;
				color: white;
				text-shadow: 1px 1px 1px black;
			}
		}
		.div_f {
			display: flex;
			justify-content: center;
			width: auto;
			padding-top: 5px;
			.div_label {
				display: flex;
				justify-content: start;
				width: 100px;
				.label {
					font-size: 18px;
					color: white;
					text-shadow: 1px 2px 2px black;
				}
			}
			.input {
				margin: 0px;
				width: 200px;
				height: 18px;
			}
		}

		.div_types {
			display: flex;
			justify-content: flex-start;
			width: 150px;
			height: 20px;
			margin: 10px 0px 30px -130px;

			.div_type_container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				margin: 0px 0px 0px 40px;
				.div_type {
					width: fit-content;
					height: fit-content;
					margin: 0px 0px 0px 7px;
					padding: 1px 1px 1px 1px;
					font-size: 18px;
					border-style: solid;
					border-color: black;
					border-width: 0px;
					border-radius: 6px;
					background-color: lima;
					box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

					.label {
						margin: 0px 7px 0px 7px;
					}
				}
			}
		}

		.div_submit {
			display: flex;
			justify-content: center;

			.btn_submit {
				width: 200px;
				height: 30px;
				border: 1px solid black;
				border-radius: 5px;
				color: white;
				text-shadow: 2px 2px 2px black;
				font-size: 20px;
				background-color: #e63946;
				&:hover {
					box-shadow: 0 0 5px 0 #ffffff;
				}
				&:active {
					outline: 0;
					transform: translateY(3px);
				}
			}
		}
	}
`;
