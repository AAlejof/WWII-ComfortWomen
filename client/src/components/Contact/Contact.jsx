import style from './Contact.module.css';
import React, { useState } from 'react';
import ContactForm from './contactForm/contactForm';
import instagram from '../../assets/img/icons/instagram.png';
import facebook from '../../assets/img/icons/facebook.png';
import linkedin from '../../assets/img/icons/linkedIn.png';
import youtube from '../../assets/img/icons/youTube.png'

const Contact = () => {
    return (
        <>
            <div>
                <div className={style.contactDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Contacto</h2>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.contentDiv}>
                        <div className={style.formDiv}>
                            <ContactForm/>
                        </div>
                        <div className={style.contactMeansDiv}>
                            <p className={style.contactP}>
                                Mail: <br /> 
                                contacto@fundacionmanyoung.org <br /> 
                                - <br /> 
                                <a className={style.contactA} href="" >Fundación Manyoung</a>
                            </p>
                            <div className={style.contactIcons}>
                                <img src={instagram} alt="instagram" />
                                <img src={youtube} alt="youtube" />
                                <img src={linkedin} alt="linkedin" />
                                <img src={facebook} alt="facebook" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Contact;