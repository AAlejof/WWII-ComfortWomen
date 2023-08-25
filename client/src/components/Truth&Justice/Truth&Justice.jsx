import style from './Truth&Justice.module.css';
import React, { useState } from 'react';
//import image from '../../assets/img/homeImg.png';


const TruthJustice = () => {
    const [selectedTitle, setSelectedTitle] = useState("¿Quiénes son?");

    const textData = [
        {
            title: "Demandas",
            summary: (
                <>
                    <p>El 10 y 11 de agosto de 1992 se organizó por primera vez el Asian Solidarity Conference (ASC) a fin de poder coordinar demandas conjuntas entre los países afectados por este sistema de esclavización sexual.</p>
                </>
            ),
            text: (
                <>
                    <p>El ASC se reúne cada dos o más años. De estas reuniones surgen las siguientes exigencias a Japón:</p>
                    <ol>
                        <li>Admitir que el sistema de esclavización sexual de la Armada Imperial de Japón fue un crimen de guerra.</li>
                        <li>Difundir los documentos oficiales vinculados a este crimen.</li>
                        <li>Ofrecerles a las víctimas una disculpa oficial.</li>
                        <li>Pagar compensaciones económicas a las víctimas.</li>
                        <li>Juzgar o castigar a los responsables.</li>
                        <li>Publicar lo ocurrido en los libros de texto de historia de Japón.</li>
                        <li>Erigir un monumento conmemorativo y construir un archivo.</li>
                    </ol>
                    <p>El 14 de agosto de 1991, la víctima coreana Kim Hak-Soon dio el primer testimonio público contando las atrocidades vividas durante su esclavización sexual. Gracias a este primer testimonio, víctimas de distintos países se animaron a hablar. En base a los testimonios recopilados por las organizaciones de defensa, se presentaron ante los tribunales de Japón demandas judiciales. Las demandas fueron todas desestimadas.</p>
                    <p>Desde el 8 de enero de 1992, el Korean Council organiza todos los miércoles a las 12 del mediodía una protesta frente a la Embajada de Japón en Seúl, Corea del Sur. Esta protesta se ha convertido en un símbolo de la resistencia y la búsqueda de justicia. Las víctimas solían participar activamente de las manifestaciones. Dada la avanzada edad de las víctimas, en la actualidad se acercan espontáneamente muchas personas a participar de la protesta. Desde jóvenes, estudiantes, trabajadores locales, artistas a extranjeros que residen en el país, turistas, grupos religiosos y organizaciones de derechos humanos. Si bien no existen protestas similares en otros países, se han organizado manifestaciones puntuales en otros lugares, especialmente en países víctimas de la esclavitud sexual de la Armada Imperial. </p>
                </>)
        },
        {
            title: "Apoyo internacional",
            summary: (
                <>
                    <p>Los reclamos de las organizaciones de defensa de las “mujeres de confort” han tenido una gran visibilidad y cuentan con apoyo de diferentes organismos internacionales y organizaciones globales de derechos humanos.</p>
                </>
            ),
            text: (
                <>
                    <p>En 1992, activistas y víctimas asistieron por primera vez a la Subcomisión de Derechos Humanos de las Naciones Unidas para pedir que se investigue el caso de las “mujeres de confort”. La Comisión de Derechos Humanos (UNCHR) decidió investigar y, en 1996, publicó el informe Radhika Coosmarasway, en 1998, el informe McDougall, y en 2010, el informe Rashida Manjoo. En estos informes se establece la responsabilidad del estado japonés en lo ocurrido y le sugiere tomar medidas al respecto. Los activistas también presentaron el caso ante la Organización Internacional del Trabajo por considerar que Japón violó la Convención de Trabajo Forzado N29. Los informes de la OIT condenaron la existencia de las estaciones de confort. </p>
                    <p>Del 8 al 12 de diciembre del 2000, se llevó a cabo el Women's International War Crimes Tribunal on Japan's Military Sexual Slavery en Tokio. Este tribunal convocado por organizaciones no gubernamentales de defensa de las “mujeres de confort” contó con una corte integrada por destacados jueces: Carmen Argibay (Argentina), Christine Chinkin (Reino Unido), Willy Mutunga (Kenia) y Gabrielle Kirk McDonald (Estados Unidos). En septiembre de 2001, la corte se reunió en La Haya para emitir su sentencia. El tribunal determinó que es un hecho internacionalmente ilícito dado que Japón violó distintos tratados internacionales firmados. El tribunal, no vinculante, condenó al emperador Hirohito y lo declaró culpable de responsabilidad por violación y esclavitud sexual como crimen de lesa humanidad.</p>
                    <p>Hay varios eventos y demandas realizadas en diferentes países. En Canadá, por ejemplo, en el año 2007, la Cámara de los Comunes en aprobó una moción unánime instando al gobierno japonés a asumir toda la responsabilidad y ofrecer una disculpa formal a las víctimas. En los Estados Unidos, la Cámara de Representantes aprobó el 30 de julio de 2007 la resolución N 121 donde solicita a Japón que se enseñe sobre las “mujeres de confort” en los libros de historia de su país. Ese mismo año, el parlamente europeo aprobó también una resolución a favor de las “mujeres de confort”. Desde entonces, distintos legisladores y funcionarios en el mundo han apoyado los reclamos de las víctimas de la esclavitud sexual de la Armada Imperial.</p>
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

    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Verdad y <br />justicia</h2>
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

export default TruthJustice;
