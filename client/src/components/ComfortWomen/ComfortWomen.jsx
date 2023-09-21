import style from './ComfortWomen.module.css';
import React, { useState, useEffect } from 'react';
import image1 from '../../assets/img/home/homeImg.png';
import image2 from '../../assets/img/home/homeImg2.png';
import image3 from '../../assets/img/home/homeImg3.png';
import Card from './Card/Card';

const ComfortWomen = () => {
    const [selectedTitle, setSelectedTitle] = useState("¿Quiénes son?");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [image1, image2, image3];

    const textData = [
        {
            title: "¿Quiénes son?",
            summary: (
                <>
                    <p>
                        "Mujeres de confort" es la traducción literal del término
                        <span className={style.koreanText}> 慰安婦 </span>
                        utilizado por el ejército japonés para encubrir a las mujeres esclavizadas sexualmente por la Armada Imperial durante la guerra de avance de Japón en Asia (1932-1945).
                        En español, se las denomina también “mujeres de consuelo” o “mujeres de solaz”.
                    </p>
                </>
            ),
            text: (
                <>
                    <p>En Corea al comienzo se las llamaba chongshindae (<span className={style.koreanText}>정신대</span>) que significa “cuerpo de mujeres voluntarias”. Se las denominaba así porque muchas mujeres reclutadas como trabajadoras de la Armada Imperial de Japón fueron esclavizadas sexualmente. Sin embargo, esta categoría distorsiona la experiencia traumática de las víctimas y genera confusiones dado que no todas las mujeres reclutadas para trabajar en las fábricas vinculadas a la guerra fueron esclavizadas sexualmente. Oficialmente, se las llama ianbu (<span className={style.koreanText}>위안부 - 慰安婦</span>) que significa “mujeres de confort”. También se utiliza de manera cariñosa y respetuosa la palabra halmoni (할머니) que significa abuela. En otros países, como Filipinas, también se las llama abuelas (lolas).</p>
                    <p>Las víctimas pertenecieron a las colonias japonesas y a todos los territorios ocupados por Japón en el marco de la guerra. Se aplicaron diferentes mecanismos de rapto. Muchas víctimas fueron reclutadas con falsas promesas de trabajo, especialmente en el caso de las mujeres de las colonias japonesas. En algunos pocos casos fueron entregadas por vecinos o familiares. En la medida que la guerra avanzaba, muchas mujeres fueron directamente raptadas delante de sus familiares, conocidos, amigos o compañeros. Entre las víctimas japonesas se han descubierto casos de prostitutas derivabas a los sitios de esclavización sexual. Las “mujeres de confort” eran jóvenes. La mayoría eran vírgenes al momento del rapto. Se estima que las víctimas tenían entre 11 y 27 años. En todos los casos fueron sometidas a un control total de sus cuerpos mediante el uso de la violencia física y psicológica.</p>
                </>)
        },
        {
            title: "Alcance de la red",
            summary: (
                <>
                    <p>Se calcula que entre 200.000 y 400.000 mujeres fueron llevadas en contra de su voluntad a las “estaciones de confort”. Este sistema de trata de personas es el más grande que haya existido en el marco de un conflicto armado contemporáneo. </p>
                </>
            ),
            text: (
                <>
                    <p>Las mujeres esclavizadas sexualmente pertenecieron a los distintos territorios ocupados por Japón durante la guerra. Además, de mujeres de sus dos colonias: Taiwán y Corea, mujeres de su propio país, y mujeres holandesas, hijas de los colonos en de las Indias Orientales Neerlandesas. Es decir, hubo víctimas coreanas, chinas, japonesas, filipinas, vietnamitas, camboyanas, laosianas, birmanas, malayas, indonesias, holandesas, tailandesas, timorenses, papú neoguineanos.</p>
                    <p>Se calcula que entre 200.000 y 400.000 mujeres fueron llevadas en contra de su voluntad a las “estaciones de confort”. Este sistema de trata de personas es el más grande que haya existido en el marco de un conflicto armado contemporáneo. </p>
                </>)
        },
        {
            title: "Orígenes y motivos",
            summary: (
                <>
                    <p>A partir de la invasión de Manchuria en 1931, el Imperio japonés inicia una etapa de avance militar en Asia que finalizará con el discurso de rendición del emperador de japón, Hirohito, el 14 de agosto de 1945.</p>
                    <p>(...)</p>
                    <p>Se han encontrado diversos documentos que prueban la existencia de este sistema de esclavización sexual. </p>
                </>
            ),
            text: (
                <>
                    <p>A partir de la invasión de Manchuria en 1931, el Imperio japonés inicia una etapa de avance militar en Asia que finalizará con el discurso de rendición del emperador de japón, Hirohito, el 14 de agosto de 1945. Al iniciarse el conflicto armado, la Armada Imperial observa que los soldados contraían enfermedades de trasmisión sexual. La Armada consideró que estas enfermedades era el producto de las violaciones masivas de mujeres y la concurrencia de los soldados a prostíbulos de la zona. Para prevenir las enfermedades de trasmisión sexual y controlar la salud de los soldados, decide establecer el sistema de las “mujeres de confort”. Este sistema le permitía controlar la salud de los soldados y de las mujeres esclavizadas sexualmente.</p>
                    <p>Otro de los motivos por los cuales se establece este sistema fue mejorar la moral de los soldados. Frente a las continuas batallas y el estrés de la guerra, creían que expandir los lugares de “entretenimiento sexual” sería fundamental para mejorar la salud mental de soldados. Además, este sistema permitiría evitar los raptos masivos de mujeres que no sólo ponían en peligro la salud de los soldados, sino que también aumentaba el sentimiento antijaponés en los territorios ocupados. Desde esta perspectiva patriarcal, las mujeres fueron consideradas un objeto sexual de confort, consuelo y bienestar de los hombres de la Armada Imperial.</p>
                    <p>Se han encontrado diversos documentos que prueban la existencia de este sistema de esclavización sexual. Entre las diversas fuentes existentes se destacan un escrito publicado en julio de 1938 en el periódico de guerra de la Novena Brigada Terrestre en el cual se solicitan más estaciones de confort para mejorar el ánimo de los soldados. Se han encontrado menciones a las “mujeres de confort” en certificados de viaje y otros documentos oficiales de la Armada Imperial. También hay varios testimonios de testigos locales y de soldados y médicos arrepentidos que corroboran la existencia de esta de red de trata. Como las investigaciones continúan, siguen apareciendo documentos e imágenes de archivo probatorias.</p>
                </>)
        },
        {
            title: "Estaciones de confort",
            summary: (
                <>
                    <p>Se denomina “estación de confort” a los lugares donde las víctimas eran esclavizadas sexualmente. De acuerdo con documentos militares japoneses de la época, a las estaciones de confort también se la denominaba “estaciones de confort de los militares”, “club militar”, “estaciones de entretenimiento para soldados” o “baños públicos”.</p>
                </>
            ),
            text: (
                <>
                    <p>Se denomina “estación de confort” a los lugares donde las víctimas eran esclavizadas sexualmente. De acuerdo con documentos militares japoneses de la época, a las estaciones de confort también se la denominaba “estaciones de confort de los militares”, “club militar”, “estaciones de entretenimiento para soldados” o “baños públicos”. El tamaño y el tipo de estación de confort varía según cuándo, dónde y cómo estaba ubicado el ejército en la zona y quién la administraba. En algunos casos, la Armada Imperial construyó estaciones de confort, en otros, renovó burdeles o residencias ocupadas. Cuando las tropas estaban en el campo de batalla, se utilizaban lugares más precarios, por ejemplo, se utilizaron los camiones militares como estaciones de confort. Las estaciones podían ser permanentes o móviles. </p>
                    <p>El número de víctimas por estación varia. En algunos casos se ha comprobado la existencia de hasta 70 mujeres esclavizadas en una estación. Las víctimas debían recibir a muchos hombres por día. Los soldados estaban obligados a usar condones, aunque no siempre lo utilizaban. Por eso, muchas mujeres contrajeron enfermedades de trasmisión sexual. Además del abuso sexual reiterado, eran sometidas a otros tipos de abusos físicos y psicológicos. Les daban muy poca comida por día y no podían mantener contacto con el exterior. Si bien los soldados debían abonar una tarifa al ingresar a la estación de confort, las víctimas, en general, no recibían dinero. </p>
                    <p>La primera estación de confort se encontró en Shanghái y data de 1932. Este sitio aún permanece intacto. Según los datos relevados, a partir de la Masacre de Nanjing en 1937, el número de estaciones de confort y de mujeres esclavizadas sexualmente aumentó significativamente.  Existían diferentes formas de administrar los centros de esclavización. En algunos casos eran administradas directamente por la Armada Imperial. En otros, la armada designaba un administrador civil que era supervisado por la Armada. A veces se utilizaban comerciantes japoneses ubicados en los territorios ocupados como administradores. En la actualidad, se han encontrado registro de cientos de estaciones de confort en todos los territorios ocupados por Japón en la guerra. </p>
                </>)
        },
        {
            title: "Testimonios"

        }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextManualImage = () => {
        nextImage();
    };

    const prevManualImage = () => {
        prevImage();
    };

    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Mujeres de <br />Confort</h2>
                        <p className={style.descP}>Durante la Segunda Guerra Mundial, el término "Mujeres de Confort" se utilizó para encubrir a las mujeres esclavizadas sexualmente por el ejército japonés en Asia (1932-1945).</p>
                    </div>
                    <div className={style.carouselContainer}>
                    <div className={style.carouselButtons}>
                        <button onClick={prevManualImage} className={style.chevron}>&#8249;</button>
                        <button onClick={nextManualImage} className={style.chevron}>&#8250;</button>
                    </div>
                    <img className={style.descImg} src={images[currentImageIndex]} alt="Mujeres de confort" />
                </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.titleDiv}>
                        {textData.map(item => (
                            <button
                                key={item.title}
                                className={selectedTitle === item.title ? style.selectedTitle : style.titleButton}
                                onClick={() => setSelectedTitle(item.title)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    {
                        (selectedTitle === "Testimonios") ?
                            <div className={style.contentDiv}><Card /><Card /><Card /></div> :

                            <div className={style.contentDiv}>
                                <div className={style.summaryDiv}>
                                    {textData.find(item => item.title === selectedTitle)?.summary}
                                </div>
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

export default ComfortWomen;
