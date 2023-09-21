import style from './Difussion.module.css';
import React, { useState } from 'react';


const Difussion = () => {
    const [selectedTitle, setSelectedTitle] = useState("Artículos");

    const textData = [
        {
            title: "Artículos",
            text: (
                <>
                    <p><a className={style.anchorD} href="https://www.pagina12.com.ar/530810-prostituidas-a-la-fuerza-en-china" target="_blank">· “El calvario de las “mujeres de confort” por Mariana Carbajal, Página 12, 12 de marzo de 2023</a></p>
                    <p><a className={style.anchorD} href="https://www.infobae.com/america/opinion/2023/02/22/el-renovado-reclamo-por-miles-de-esclavas-sexuales-que-piden-justicia/" target="_blank">· “El renovado reclamo por miles de esclavas sexuales que piden justicia” por María del Pilar Álvarez, Infobae, 22 de febrero 2023</a></p>
                    <p><a className={style.anchorD} href="https://revistas.ucm.es/index.php/GEOP/article/view/64186" target="_blank">· “Regionalismo enraizado: El movimiento social de las “mujeres de confort” en Corea del Sur, China y Taiwán” por María del Pilar Álvarez, Revista Geopolítica(s) de la Universidad Complutense de Madrid, 2020</a></p>
                    <p><a className={style.anchorD} href="https://www.cidob.org/es/articulos/revista_cidob_d_afers_internacionals/121/militancia_diasporica_el_ciclo_de_accion_colectiva_de_apoyo_a_las_mujeres_de_confort_en_europa_y_eeuu_2015_2016" target="_blank">· “Militancia diaspórica: El ciclo de acción colectiva del movimiento de las “mujeres de confort” en Europa y los Estados Unidos, 2015-2016” por María del Pilar Álvarez en Revista CIDOB d’Afers Internacionals, Barcelona, 2019</a></p>
                    <p><a className={style.anchorD} href="https://www.pagina12.com.ar/151483-la-ceremonia-de-los-miercoles" target="_blank">· “La ceremonia de los miércoles” de Juan Forn, Página 12, 28 de octubre de 2018</a></p>
                    <p><a className={style.anchorD} href="https://p3.usal.edu.ar/index.php/miriada/article/view/3786" target="_blank">· “La sociedad civil trasnacional contra-ataca: El rol del Consejo coreano para las mujeres raptadas por Japón como esclavas sexuales en la rectificación del pasado agresor de Japón en la región. 1991-2015” en Revista Miriada, 2016</a></p>
                </>)
        },
        {
            title: "Novelas",
            text: (
                <>
                    <p>· “Hierba” de Keum Suk Gendry-Kim, 2023 (2017), Editorial Reservoir Books</p>
                    <p>· “La hija del bambú” de Nora Okja Keller, 2002, Editorial Grijalbo</p>
                    <p>· “Una vida de gestos” de Lee Chang-Rae, 1999, Editorial Angrama</p>
                </>)
        }
    ];

    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Difusión</h2>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.titleDiv}>
                        {textData.map(item => (
                            <div className={style.buttonsDiv}>
                                <button
                                    key={item.title}
                                    className={selectedTitle === item.title ? style.selectedTitle : style.titleButton}
                                    onClick={() => setSelectedTitle(item.title)}
                                >
                                    <div className={style.titleText}>{item.title}</div>

                                </button>
                                <div className={style.selectorDiv}>
                                    <div className={selectedTitle === item.title ? style.selectorOn : style.selectorOff}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {
                        <div className={style.contentDiv}>
                            <div className={style.textDiv}>
                                {textData.find(item => item.title === selectedTitle)?.text}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Difussion;