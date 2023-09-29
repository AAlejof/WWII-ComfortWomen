import style from './Blog.module.css';
import React, { useState } from 'react';
import NewsCard from '../News/NewsCard/NewsCard';
import image from '../../assets/img/news/newsImg1.png'

const Blog = () => {
    return (
        <>
            <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Mujeres de <br />Confort</h2>
                        <p className={style.descP}>Durante la Segunda Guerra Mundial, el término "Mujeres de Confort" se utilizó para encubrir a las mujeres esclavizadas sexualmente por el ejército japonés en Asia (1932-1945).</p>
                    </div>
                    <div className={style.carouselContainer}>
                        <img className={style.descImg} src={image} alt="Mujeres de confort" />
                    </div>
                </div>
            <div className={style.otherNewsDiv}>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Otras noticias</h2>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.contentDiv}>
                        <NewsCard /><NewsCard /><NewsCard />
                    </div>
                <button className={style.btnDiv}>
                    VER MÁS
                </button>
                </div>
            </div>
        </>


    )
}

export default Blog;