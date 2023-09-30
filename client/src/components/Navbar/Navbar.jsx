import style from './Navbar.module.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const location = useLocation();

    return (
        <>
            {(location.pathname === '/blog') ?
                <div className={style.navbarDiv}>
                    <p className={style.pNavbarDiv}>
                        <Link to="/" >
                            MUJERES DE CONFORT
                        </Link>
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
                    <span className={style['floating-chevron']} onClick={scrollToTop}>&#8248;</span>
                </div> :

                <div className={style.navbarDiv}>
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
                    <span className={style['floating-chevron']} onClick={scrollToTop}>&#8248;</span>
                </div>
            }
        </>
    )
}

export default Navbar;
