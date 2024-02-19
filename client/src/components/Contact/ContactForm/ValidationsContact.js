const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;
const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
const maxMessageLength = 300;
const maxAboutLength = 50;

const ValidateContact = (data) => {
  const errors = {};

  if (!data.author_name || !regexName.test(data.author_name)) {
    errors.author_name = 'El nombre es inválido o está vacío.';
  }

  if (!data.mail || !regexEmail.test(data.mail)) {
    errors.mail = 'La dirección de correo es inválida o está vacía.';
  }

  if (!data.tag || data.tag.length > maxAboutLength) {
    errors.tag = `El asunto no debe estar vacío ni superar los ${maxAboutLength} caracteres.`;
  }

  if (!data.content || data.content.length > maxMessageLength) {
    errors.content = `El mensaje no debe estar vacío ni superar los ${maxMessageLength} caracteres.`;
  }

  return errors;
};

export default ValidateContact;
