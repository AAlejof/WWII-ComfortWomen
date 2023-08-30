import style from './NewsCard.module.css';
import React, { useState } from 'react';
import image from '../../../assets/img/news/newsImg1.png';

const NewsCard = () => {
    return (

        <div className={style.cardContainer}>
            <div >
                <img className={style.cardImg} src={image} alt='News img' />
            </div>
            <h3 className={style.h3Title}>Muestra de fotografías “Para no volver” en la Legislatura de la Ciudad Autónoma de Buenos Aires.</h3>
            <div className={style.cardDescription}>
                <p className={style.cardP}>Categoría</p>
                <p className={style.cardP}>12/01/23</p>
            </div>
        </div>

    )
}

export default NewsCard;