import style from './NewsDetail.module.css';
import React, { useState } from 'react';
import image from '../../../assets/img/news/newsImg1.png'

const NewsDetail = () => {
    return (
        <>
            <div className={style.titleImgDiv}>
                <div className={style.titleDiv}>
                    <span className={style.categorySpan}>Categoría</span>
                    <h2 className={style.newsH2}>Muestra de fotografías “Para no volver” en la Legislatura de la Ciudad Autónoma de Buenos Aires.</h2>
                    <span className={style.dateSpan}>12/01/23</span>
                </div>
                <div className={style.carouselContainer}>
                    <img className={style.descImg} src={image} alt="Noticia Img" />
                </div>
            </div>
            <div className={style.newsTextDiv}>
                 <p className={style.newsP}>Muestra de fotografías “Para no volver” en la Legislatura de la Ciudad Autónoma de Buenos Aires. Muestra de fotos de las “mujeres de confort” coreanas en China del fotógrafo Yajima Tsukasa, curaduría de la Dra. María del Pilar Álvarez. Organizado por Asociación civil de coreanos en la Argentina y la legisladora Victoria Montenegro.</p>
            </div>
        </>


    )
}

export default NewsDetail;