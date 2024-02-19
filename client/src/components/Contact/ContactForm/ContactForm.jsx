import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../../../redux/actions/actions';
import ValidateContact from './ValidationsContact';
import swal from 'sweetalert';
import style from './ContactForm.module.css';

const ContactForm = () => {
	const dispatch = useDispatch();

	const initialInput = {
		author_name: '',
		tag: '',
		content: '',
		mail: ''
	};

	const [input, setInput] = useState(initialInput);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value
		});
		setErrors(ValidateContact({ ...input, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateContact(input));
		const error = ValidateContact(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Falta Información',
				text: 'Completa todos los campos antes de enviar',
				icon: 'warning',
				dangerMode: true
			});
		} else {
			dispatch(postContact(input)).then(() => {
				swal({
					title: 'Gracias!',
					text: '¡Mensaje enviado!',
					icon: 'success'
				});
				setInput(initialInput);
			});
		}
	};

	return (
		<>
			<div className={style.formContainer}>
				<p className={style.formP}>Puede utilizar el siguiente formulario para contactarnos.</p>
				<form onSubmit={handleSubmit}>
					<div className={style.formDiv}>
						<input
							className={style.formInput}
							type="text"
							name="author_name"
							placeholder="Nombre/s"
							autoComplete="on"
							value={input.author_name}
							onChange={handleChange}
						/>
						{errors.author_name && (
							<div className={style.error}>{errors.author_name}</div>
						)}
						<input
							className={style.formInput}
							type="text"
							name="mail"
							placeholder="E-Mail"
							value={input.mail}
							onChange={handleChange}
						/>
						{errors.mail && (
							<div className={style.error}>{errors.mail}</div>
						)}
						<input
							className={style.formInput}
							type="text"
							name="tag"
							placeholder="Asunto"
							value={input.tag}
							onChange={handleChange}
						/>
						{errors.tag && (
							<div className={style.error}>{errors.tag}</div>
						)}
						<textarea
							className={style.bigBoxInput}
							name="content"
							placeholder="Mensaje"
							value={input.content}
							onChange={handleChange}
						/>
						{errors.content && (
							<div className={style.error}>{errors.content}</div>
						)}
					</div>

					<button type="submit" className={style.btnDiv}>
						ENVIAR
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
