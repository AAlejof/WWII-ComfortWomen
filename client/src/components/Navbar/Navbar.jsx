import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className={style.navbarDiv}>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>MUJERES DE CONFORT</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>VERDAD YJUSTICIA</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>DIFUSIÓN</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>NOTICIAS</Link>
                </p>
                <p className={style.pNavbarDiv}>
                    <Link to='/'>CONTACTO</Link>
                </p>
            </div>
        </>
    )
}

export default Navbar;