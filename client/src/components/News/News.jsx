import style from './News.module.css';
import React, { useState } from 'react';
import NewsCard from './NewsCard/NewsCard';
import image from '../../assets/img/gilWon-okImg.jpeg';

const News = () => {
    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Noticias</h2>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.contentDiv}>
                        <NewsCard/><NewsCard/><NewsCard/>
                    </div>
                </div>
            </div>
        </>


    )
}

export default News;