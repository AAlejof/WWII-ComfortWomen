import style from './Card.module.css';
import React, { useState } from 'react';
import image from '../../../assets/img/survivors/gilWon-okImg.jpeg';

const Card = () => {
    return (

        <div className={style.cardContainer}>
            <div >
                <img className={style.cardImg} src={image} alt='Survivor img' />
            </div>
            <h3 className={style.name}>Gil Won-ok</h3>
            <h4 className={style.desc}>halmoni</h4>
            <div className={style.cardDescription}>
                <p className={style.cardP}>"My scars will never fade away"</p>
            </div>
        </div>

    )
}

export default Card;