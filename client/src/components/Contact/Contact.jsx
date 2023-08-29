import style from './Contact.module.css';
import React, { useState } from 'react';
import NewsCard from '../News/NewsCard/NewsCard';

const Contact = () => {
    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Contacto</h2>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.contentDiv}>
                        <NewsCard /><NewsCard /><NewsCard />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Contact;