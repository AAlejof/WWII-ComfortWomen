import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const location = useLocation();

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <div className={style.navbarContainer}>
            {/* Desktop Navbar */}
            {window.innerWidth > 450 && (
                <div className={`${style.navbarDiv} ${style.desktopNav}`}>
                    {(location.pathname === '/blog' || location.pathname === '/admin') ? (
                        <p className={style.pNavbarDiv}>
                            <Link to="/">
                                MUJERES DE CONFORT
                            </Link>
                        </p>
                    ) : (
                        <>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink to="comfortWomen" spy={true} smooth={true} offset={-70} duration={700}>
                                    MUJERES DE CONFORT
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink to="truthJustice" spy={true} smooth={true} offset={-70} duration={700}>
                                    VERDAD Y JUSTICIA
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink to="difussion" spy={true} smooth={true} offset={-70} duration={700}>
                                    DIFUSIÓN
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink to="news" spy={true} smooth={true} offset={-70} duration={700}>
                                    NOTICIAS
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={700}>
                                    CONTACTO
                                </ScrollLink>
                            </p>
                        </>
                    )}
                    <span className={style['floating-chevron']} onClick={scrollToTop}>&#8248;</span>
                </div>
            )}

            {/* Mobile Navbar */}
            {window.innerWidth <= 450 && (
                <div className={`${style.navbarDiv} ${style.mobileNav} ${menuOpen ? style.open : ''}`}>
                    <div className={style.hamburgerNav} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                        <div className={style.bar}></div>
                    </div>
                    {menuOpen && (
                        <>
                            <p className={style.pNavbarDiv} >
                                <ScrollLink onClick={closeMenu} to="comfortWomen" spy={true} smooth={true} offset={-70} duration={700}>
                                    MUJERES DE CONFORT
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink onClick={closeMenu} to="truthJustice" spy={true} smooth={true} offset={-70} duration={700}>
                                    VERDAD Y JUSTICIA
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink onClick={closeMenu} to="difussion" spy={true} smooth={true} offset={-70} duration={700}>
                                    DIFUSIÓN
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink onClick={closeMenu} to="news" spy={true} smooth={true} offset={-70} duration={700}>
                                    NOTICIAS
                                </ScrollLink>
                            </p>
                            <p className={style.pNavbarDiv}>
                                <ScrollLink onClick={closeMenu} to="contact" spy={true} smooth={true} offset={-70} duration={700}>
                                    CONTACTO
                                </ScrollLink>
                            </p>
                        </>
                    )}
                    <span className={style['floating-chevron']} onClick={scrollToTop}>&#8248;</span>
                </div>
            )}
        </div>
    );
};

export default Navbar;

