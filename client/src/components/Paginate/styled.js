import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	.div_container {
		display: flex;
		justify-content: center;
		background-color: #2a75bb;
		width: auto;
		height: 26px;
		padding: 0px 0px 0px 0px;
		border: solid #dee2e6;
		border-width: 2px 2px 2px 0px;
		border-radius: 3px;
		margin: 19px 0px 0px 0px;
		margin-top: -533px;
		.div_list {
			padding: 3px 0px 0px 0px;
			width: 23px;
			display: inline-block;
			margin: 0px 0px 0px 0px;
			border: solid #dee2e6;
			border-width: 0px 0px 0px 2px;
			border-radius: 1px;
			background-color: #2a75bb;
			&:hover {
				cursor: pointer;
				background-color: #ffcb05;
			}
		}
		.ul {
			margin: 0px;
			padding: 0px;
		}
		.list {
			font-size: 17px;
			font-weight: lighter;
			list-style: none;
			text-align: center;
			&:hover {
				color: white;
			}
		}
		.listed {
			color: #ffcb05;
			font-size: 17px;
			font-weight: lighter;
			list-style: none;
			text-align: center;
			&:hover {
				color: white;
			}
		}
	}
`;