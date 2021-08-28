import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 130px 0px 60px 0px;
	.div_menu {
		.div_title {
			display: flex;
			justify-content: center;

			margin: 0px 0px 0px 0px;
			.title {
				color: white;
				text-shadow: 3px 2px 4px black;
			}
		}
		.input {
			margin: 0px 0px 0px 0px;
			border: 5px;
			border-radius: 3px;
			outline: 0;
			height: 25px;
			width: 200px;
			&:focus {
			}
		}
		.div_btn {
			display: flex;
			justify-content: center;

			.btn_seatch {
				margin-top: 10px;
				border: 1px;
				border-radius: 3px;
				height: 20px;
				width: 100px;
				outline: 0;
				cursor: pointer;
				&:active {
					outline: 0;
					transform: translateY(3px);
				}
			}
		}
	}

	
	}
`;
