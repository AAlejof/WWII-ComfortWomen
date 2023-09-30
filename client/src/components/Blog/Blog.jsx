import style from './Blog.module.css';
import React, { useState } from 'react';
import NewsCard from '../News/NewsCard/NewsCard';
import NewsDetail from '../News/NewsDetail/NewsDetail';
import Contact from '../Contact/Contact';

const Blog = () => {
    return (
        <>
            <div>
                <NewsDetail />
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
                <Contact />
            </div>
        </>


    )
}

export default Blog;