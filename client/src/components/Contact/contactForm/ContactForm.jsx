import style from './ContactForm.module.css';
import React, { useState } from 'react';

const ContactForm = () => {
    return (
        <>
            <div className={style.formContainer}>
                <p className={style.formP}>Puede utilizar el siguiente formulario para contactarnos.</p>
                <form action="">
                    <div className={style.formDiv}>
                        <input className={style.formInput} type="text" id='name' placeholder="Nombre/s" autoComplete='on' />
                        <input className={style.formInput} type="text" id='mail' placeholder="E-Mail" />
                        <input className={style.formInput} type="text" id='about' placeholder="Asunto" />
                        <textarea className={style.bigBoxInput} type="text" id='message' placeholder="Mensaje" />
                    </div>
                </form>
                <button className={style.btnDiv}>
                    ENVIAR
                </button>
            </div>
        </>
    )

}

export default ContactForm;