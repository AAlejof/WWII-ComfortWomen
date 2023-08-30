import style from './ContactForm.module.css';
import React, { useState } from 'react';

const ContactForm = () => {
    return (
        <>
            <div className={style.formContainer}>
                <p className={style.formP}>Puede utilizar el siguiente formulario para contactarnos.</p>
                <form action="">
                    <input type="text" placeholder="Nombre/s" />
                    <input type="text" placeholder="E-Mail" />
                    <input type="text" placeholder="Asunto" />
                    <input type="text" placeholder="Mensaje" />
                </form>
            </div>
        </>
    )

}

export default ContactForm;