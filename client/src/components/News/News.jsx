import style from './News.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
    return (
        <>
            <div className={style.newsContainer}>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Noticias</h2>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.contentDiv}>
                        <NewsCard /><NewsCard /><NewsCard />
                    </div>
                <button className={style.btnDiv}>
                    <Link to="/blog">VER MÁS</Link>
                </button>
                </div>
            </div>
        </>


    )
}

export default News;