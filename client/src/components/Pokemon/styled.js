import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
	justify-content: center;
	margin-top: 120px;

	.div_card {
		.unset {
			background-color: rgb(233, 237, 245);
			border: 2px solid transparent;
	        border-color: red;
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.fire{
			background-color: rgba(252, 6, 6, 0.37);
			border: 2px solid transparent;
	        border-color: red;
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.water{
			background-color: rgba(0, 84, 240, 0.39);
			border: 2px solid transparent;
	        border-color: rgba(0, 84, 240, 0.959);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.poison {
			background-color: rgba(248, 44, 200, 0.479);
			border: 2px solid transparent;
	        border-color: rgba(248, 44, 200, 0.87);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.normal{
			background-color: rgba(15, 15, 15, 0.486);
			border: 2px solid transparent;
	        border-color: black;
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.grass {
			background-color: rgba(6, 247, 6, 0.404);
			border: 2px solid transparent;
	        border-color: rgba(6, 247, 6, 0.767);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.bug {
			background-color: rgba(157, 6, 245, 0.432);
			border: 2px solid transparent;
	        border-color: rgba(157, 6, 245, 0.87);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.electric {
			background-color: rgba(248, 232, 0, 0.452);
			border: 2px solid transparent;
	        border-color: rgba(248, 232, 0, 0.932);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.ground {
			background-color: rgba(255, 115, 0, 0.548);
			border: 2px solid transparent;
	        border-color: rgba(255, 115, 0, 0.959);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.fairy {
			background-color: rgba(12, 16, 245, 0.473);
			border: 2px solid transparent;
	        border-color: rgba(12, 16, 245, 0.808);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}

		.link {
			text-decoration: none;
			color: inherit;
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 305px;
				margin: 0px 0px 0px 90px;
				margin-top: 75px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.fighting{
			background-color: rgba(6, 252, 231, 0.233);
			border: 2px solid transparent;
			border-color: rgba(6, 252, 231, 0.925);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.flying {
			background-color: rgba(252, 6, 80, 0.233);
			border: 2px solid transparent;
			border-color: rgba(252, 6, 80, 0.904);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}

		.rock {
			background-color: rgba(87, 7, 7, 0.699);
			border: 2px solid transparent;
			border-color: rgba(87, 7, 7, 0.993);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		
		.ghost {
			background-color: rgba(22, 77, 34, 0.692);
			border: 2px solid transparent;
			border-color: rgb(14, 66, 25);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}

		.steel {
			background-color: rgba(19, 141, 90, 0.699);
			border: 2px solid transparent;
			border-color: rgba(19, 141, 90, 0.877);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.psychic {
			background-color: rgba(106, 185, 14, 0.616);
			border: 2px solid transparent;
			border-color: rgba(89, 151, 18, 0.952);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.ice {
			background-color: rgba(110, 216, 219, 0.616);
			border: 2px solid transparent;
			border-color: rgb(110, 215, 219);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.dragon {
			background-color: rgba(93, 102, 102, 0.616);
			border: 2px solid transparent;
			border-color: rgba(93, 102, 102, 0.959);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		.unknown {
			background-color: rgba(255, 255, 255, 0.534);
			border: 2px solid transparent;
			border-color: rgba(255, 255, 255, 0.986);
			width: 750px;
            height: 404px;
            margin-top: -75px;
			.img {
				height: 255px;
				margin: 0px 0px 0px 111px;
				margin-top: 130px;
				   
				   &:hover {
					   transform: scaleX(-1);
				   }
			   }
		}
		
		

		.div_details {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 0fr));
			grid-gap: 0px;
			margin: -220px 0px 0px 460px;
			

			.text {
				line-height: 10px;
				font-size: 25px;
				color: black;
				text-shadow: 1px 2px 2px black;
				font-family: consolas;
                font-weight: bold;
			    margin: -10px 0px 30px -8px;
			}
			.id {
				font-size: 12px;
				color: black;
                font-weight: bold;
				display: flex;
				justify-content: center;
				margin: 25px 0px 0px -40px;
			}
		}

		.div_title {
			display: flex;
			justify-content: center;
			margin: 18px 0px 0px 0px;
			width: auto;
			height: 60px;
			color: white;
			font-size: 25px;
			text-shadow: 1px 3px 1px black;
		}

		.div_img {
			width: 230px;
			padding: 10px;

			.container {
				display: flex;
				flex-direction: row;
				justify-content: center;
				.div_types {
					margin: -5px 0px 0px 5px;
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
		}
	}
`;
