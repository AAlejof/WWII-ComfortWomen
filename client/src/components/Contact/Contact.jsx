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
                                <a href="https://www.instagram.com/fundacionmy/" target="_blank"><img src={instagram} alt="instagram" /> </a>
                                <a href="https://www.youtube.com/@FundacionManyoung" target="_blank"><img src={youtube} alt="youtube" /></a>
                                <a href="" target="_blank"><img src={linkedin} alt="linkedin" /></a>
                                <a href="" target="_blank"><img src={facebook} alt="facebook" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Contact;