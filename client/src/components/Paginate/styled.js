import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;

	.div_container {
		display: flex;
		justify-content: center;
		background-color: white;
		width: auto;
		height: 20px;
		padding: 0px 0px 0px 0px;
		border: solid #dee2e6;
		border-width: 2px 2px 2px 0px;
		border-radius: 3px;
		margin: 19px 0px 0px 0px;

		.div_list {
			padding: 3px 0px 0px 0px;
			width: 23px;
			display: inline-block;
			margin: 0px 0px 0px 0px;
			border: solid #dee2e6;
			border-width: 0px 0px 0px 2px;
			border-radius: 1px;
			background-color: white;
			&:hover {
				cursor: pointer;
				background-color: #dee2e6;
			}
		}
		.ul {
			margin: 0px;
			padding: 0px;
		}

		.list {
			color: #dee2e6;
			font-size: 14px;
			font-weight: lighter;
			list-style: none;
			text-align: center;
			&:hover {
				color: black;
			}
		}

		.listed {
			color: black;
			font-size: 14px;
			font-weight: lighter;
			list-style: none;
			text-align: center;
		}
	}
`;

