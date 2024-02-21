import style from './CardDetail.module.css';
import halmonis from '../halmonisData';
import React, { useState } from 'react';


const CardDetail = ({ onClose, halmoni }) => {
    return (

        <div className={style.cardContainer}>
            <h3 className={style.name}>{halmoni?.name}</h3>
            <h4 className={style.desc}>{halmoni?.description}</h4>
            <div className={style.cardDescription}>
                <p className={style.cardP}>{halmoni?.testimony}</p>
            </div>
            <button className={style.closeBtn} onClick={onClose}>x</button>
        </div>

    )
}

export default CardDetail;