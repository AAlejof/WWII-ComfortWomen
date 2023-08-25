import style from './Card.module.css';
import React, { useState } from 'react';
import image from '../../../assets/img/gilWon-okImg.jpeg';

const Card = () => {
    return (

        <div className={style.cardContainer}>
            <div >
                <img className={style.cardImg} src={image} alt='Survivor img' />
            </div>
            <h3 className={style.Name}>Gil Won-ok</h3>
            <h4>halmoni</h4>
            <div className={style.cardDescription}>
                <p className={style.cardP}>"My scars will never fade away"</p>
            </div>
        </div>

    )
}

export default Card;