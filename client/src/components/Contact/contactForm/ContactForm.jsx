import style from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postContact } from '../../../redux/actions/actions';
import ValidateContact from './ValidationsContact';
import swal from 'sweetalert';

const ContactForm = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
		author_name:'',
		tag:'',
		content:'',
		mail:''
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			ValidateContact({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(ValidateContact(input));
		let error = ValidateContact(input);
		if (Object.values(error).length !== 0) {
			swal({
				title: 'Faltan Información',
				text: `${error.name || error.rate || error.review}`,
				icon: 'warning',
				dangerMode: true,
			});
		} else {
			dispatch(postContact(input));
			swal({
				title: 'Gracias!',
				text: '¡Opinión enviada con éxito!',
				icon: 'success',
			});
		}
	};

    return (
        <>
            <div className={style.formContainer}>
                <p className={style.formP}>Puede utilizar el siguiente formulario para contactarnos.</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.formDiv}>
                        <input className={style.formInput} type="text" id='name' placeholder="Nombre/s" autoComplete='on' onChange={handleChange}/>
                        <input className={style.formInput} type="text" id='mail' placeholder="E-Mail" onChange={handleChange}/>
                        <input className={style.formInput} type="text" id='about' placeholder="Asunto" onChange={handleChange}/>
                        <textarea className={style.bigBoxInput} type="text" id='message' placeholder="Mensaje" onChange={handleChange}/>
                    </div>
                </form>
                <button type='submit' className={style.btnDiv} onSubmit={(e) => handleSubmit(e)}>
                    ENVIAR
                </button>
            </div>
        </>
    )

}

export default ContactForm;