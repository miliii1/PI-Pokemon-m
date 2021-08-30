export const Validate = (data) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!data.name) {
		errors.name = 'Se requiere el nombre';
	}
	if (!data.hp || data.hp.search(reg) === -1) {
		errors.hp = 'HP requiere un número';
	}
	if (!data.attack || data.attack.search(reg) === -1) {
		errors.attack = 'Attack requiere un número';
	}
	if (!data.defense || data.defense.search(reg) === -1) {
		errors.defense = 'Defense requiere un número';
	}
	if (!data.speed || data.speed.search(reg) === -1) {
		errors.speed = 'Speed requiere un número';
	}
	if (!data.height || data.height.search(reg) === -1) {
		errors.height = 'Height requiere un número';
	}
	if (!data.weight || data.weight.search(reg) === -1) {
		errors.weight = 'Weight requiere un número';
	}
	return errors;
};

export default Validate;
