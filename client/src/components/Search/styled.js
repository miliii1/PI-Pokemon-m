import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0px 60px 0px;
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
			margin: 20px 700px 0px 0px;
			border: 5px;
			border-radius: 27px;
			outline: 0;
			height: 35px;
			width: 300px;
			&:focus {
			}
		}
		.div_btn {
			display: flex;
			justify-content: center;

			.btn_seatch {
				display: flex;
    background: none;
    border: none;
    padding: 0;
	margin-right: 9px;
				
				&:active {
					outline: 0;
					transform: translateY(3px);
				}
				.searchIcon {
					width: 37px;
					border-top-right-radius: 15px;
					border-bottom-right-radius: 15px;
	                background-color: yellow;
					padding-right: 5px;
					margin-left: -230px;
                    margin-top: -37px;
                    margin-block-end: 4px;
				}
				.searchIcon:hover {
					cursor: pointer;
				}
			}
		}
	}

	
	}
`;
