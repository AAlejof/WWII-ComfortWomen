import style from './Home.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import image from '../../assets/img/homeImg.png'

const Home = () => {
    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Mujeres de <br />Confort</h2>
                        <p className={style.descP}>Durante la Segunda Guerra Mundial, el término "Mujeres de Confort" se utilizó para encubrir a las mujeres esclavizadas sexualmente por el ejército japonés en Asia (1932-1945).</p>
                    </div>
                    <div>
                        <img  className={style.descImg} src= {image} alt="Mujeres de confort" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;