export const Validate = (data) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!data.name) {
		errors.name = 'Se requiere los datos';
	}
	if (!data.hp || data.hp.search(reg) === -1) {
		// errors.hp = 'HP is required and it must be a number';
	}
	if (!data.attack || data.attack.search(reg) === -1) {
		// errors.attack = 'Attack is required and it must be a number';
	}
	if (!data.defense || data.defense.search(reg) === -1) {
		// errors.defense = 'Defense is required and it must be a number';
	}
	if (!data.speed || data.speed.search(reg) === -1) {
		// errors.speed = 'Speed is required and it must be a number';
	}
	if (!data.height || data.height.search(reg) === -1) {
		// errors.height = 'Height is required and it must be a number';
	}
	if (!data.weight || data.weight.search(reg) === -1) {
		// errors.weight = 'Weight is required and it must be a number';
	}
	return errors;
};

export default Validate;
