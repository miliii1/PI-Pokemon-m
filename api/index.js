//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const {conn, Type, Pokemon} = require('./src/db.js');
const axios = require('axios');
const {POKEMON_TYPE} = require('./src/utils/constants');

//inicio el servidor, por ende llevo los types a la base de datos

conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log('Server is listening on port 3001');
		axios.get('https://pokeapi.co/api/v2/pokemon/zubat').then((a) =>
			Pokemon.create({
				name: a.data.name,
				hp: a.data.stats[0].base_stat,
				attack: a.data.stats[1].base_stat,
				defense: a.data.stats[2].base_stat,
				speed: a.data.stats[5].base_stat,
				height: a.data.height,
				weight: a.data.weight,
				Types: a.types.map((a) => {
					return {name: a.type.name};
				}),
				sprite: a.data.sprites.front_default,
			})
		);
		axios.get(POKEMON_TYPE).then((a) => {
			a.data.results.forEach((el) => Type.create({name: el.name}));
			console.log('The types were created successfully');
		});
	});
});
