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

conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log('Server is listening on port 3001');
		axios.get('https://pokeapi.co/api/v2/pokemon/psyduck').then((r) =>
			Pokemon.create({
				name: r.data.name,
				hp: r.data.stats[0].base_stat,
				attack: r.data.stats[1].base_stat,
				defense: r.data.stats[2].base_stat,
				speed: r.data.stats[5].base_stat,
				height: r.data.height,
				weight: r.data.weight,
				sprite: r.data.sprites.front_default,
			})
				.then((r) => r.setTypes(11))
				.then(console.log('PSYDUCK were created successfully'))
		);
		axios.get(POKEMON_TYPE).then((r) => {
			r.data.results.forEach((el) => Type.create({name: el.name}));
			console.log('The types were created successfully');
		});
	});
});
