import styled from 'styled-components';

export const StyledDiv = styled.div`
	margin: 60px 90px 0px 0px;

	.div_title {
		.title {
			padding: 0px;
			margin: 0px;
			color: white;
			text-shadow: 2px 2px 2px black;
		}
	}
	.div_img {
		display: flex;
		justify-content: center;
		.img {
			padding: 0px;
			margin: 0px;
			animation: 1s infinite alternate psyduck;
		}
	}
	@keyframes psyduck {
		from {
			transform: rotate(-10deg);
		}

		to {
			transform: rotate(10deg);
		}
	}
`;
