const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

const ValidationsContact = (input) => {
	let errors = {};

	if (!input.name) {
		errors.name = 'Debe incluir un Nombre';
	} else if (!regexName.test(input.name)) {
		errors.name = 'El Nombre contiene algún caracter invalido';
	} else if (!input.about) {
		errors.mail = 'Debe agregar un asunto';
	} else if (!input.message) {
		errors.about = 'Debe agregar un mensaje';
	} else if (input.message.length > 300) {
		errors.review = 'El mensaje es demasiado largo, Max 300 caracteres.';
	}

	return errors;
};

export default ValidationsContact;