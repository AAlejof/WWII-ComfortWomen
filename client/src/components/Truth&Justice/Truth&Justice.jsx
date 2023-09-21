import style from './Truth&Justice.module.css';
import React, { useState } from 'react';
//import image from '../../assets/img/homeImg.png';


const TruthJustice = () => {
    const [selectedTitle, setSelectedTitle] = useState("Demandas");

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
            title: "Respuesta de Japón",
            summary: (
                <>
                    <p>Hay varias organizaciones sociales feministas y abogados de derechos humanos japoneses que han colaborado con los reclamos de las víctimas. También hay académicos, periodistas y artistas japoneses comprometidos con la lucha de las “mujeres de confort”. Sin embargo, los gobiernos de Japón no han logrado generar una política consensuada que resuelva las demandas de las víctimas.</p>
                </>
            ),
            text: (
                <>
                    <p>El 6 de julio de 1992, el gobierno de Japón publicó el Informe Kato y el 4 de agosto de 1993 el Informe Kono. En ambos informes asumen que en base a las evidencias encontradas las víctimas fueron llevadas a las estaciones de confort en contra de su voluntad. En agosto de 1994, el por entonces primer ministro, Tomiichi Murayama, emitió una declaración donde expresaba su profundo remordimiento y les pedía disculpas sinceras a las víctimas. El 7 de diciembre, publicó un informe sobre la problemática de las “mujeres de confort” y, en 1995, se forma el Asian Women's Fund (AWF). El objetivo del AWF era compensar económicamente a las víctimas, entregarle una disculpa oficial, generar programas para su bienestar, recopilar información para conformar un registro histórico e iniciar y apoyar actividades de difusión. Este fondo estaba conformado por dinero del estado y donaciones privadas. Asimismo, no abarcó a todas las víctimas, sino a las provenientes de los países con los cuales se negoció el fondo: Corea del Sur, Filipinas, Taiwán, Holanda e Indonesia. Si bien 364 “mujeres de confort” aceptaron el AWF, las organizaciones de defensa rechazaron esta propuesta por considerar que la propuesta no resolvía todas las demandas ni tampoco incluía a todas las víctimas de la esclavitud sexual. El fondo cerró el 31 de marzo de 2007. </p>
                    <p>El 28 de diciembre de 2015, el por entonces primer ministro de Japón, Shinzo Abe, y la ex presidenta de Corea del Sur, Park Geun-Hye, firmaron un acuerdo para resolver el problema de las “mujeres de confort” en Corea del Sur. Se convino la creación de una fundación con fondos del estado japonés para compensar a las víctimas. También se acordó el envío de una disculpa oficial a quienes solicitaran la reparación. Este acuerdo fue fuertemente rechazado por el Korean Council, House of Sharing y por diversas organizaciones surcoreanos de derechos civiles, derechos humanos y derechos de la mujer en Corea del Sur. Se exigió anular el acuerdo porque no respetaba las demandas de las víctimas y se repudió el pedido de Japón de remover la estatua de la paz ubicada frente a la Embajada de Japón en Seúl. </p>
                </>)
        },
        {
            title: "Sitios de memoria",
            summary: (
                <>
                    <p>La lucha de las organizaciones sociales que defiende a las “mujeres de confort” en el mundo ha dado lugar a la creación de diversos espacios de memoria.</p>
                </>
            ),
            text: (
                <>
                    <p>El primer museo dedicado a las víctimas de la esclavitud sexual de la Armada Imperial de Japón lo inauguró House of Sharing en Corea del Sur el 14 de agosto de 1998. El Museum of Japanese Military Sexual Slavery que funciona actualmente en Gyeonggi-do. El 5 de mayo de 2012, el Korean Council abrió el War and Women´s Human Rights Museum en Seúl. El 5 de diciembre en la ciudad de Daegu inaguraron el Museum of Military Sexual Slavry by Japan. En Corea del Sur, además de los museos, suele haber exhibiciones temporarias y permanentes en distintos museos nacionales y provinciales. La musealización de este pasado traumático se expandió a otros países de la región. En China continental se encuentra el único museo que funciona en una ex estación de confort, el Museum of Dongjiagou Japanese Military Confort Station in Longling. Además, hay una exhibición permanente en el Nanjing Massacre Memorial Hall y, en 2016, abrió el Chinese “Comfort Women” History Museum en la Shanghai Normal University. En Taipei está el Ama Museum y, en Tokio, el Japanese Women´s Active Museum on War and Peace. En Berlin, también hay un museo dedicado a las “mujeres de confort” llamado Museum der Trostfrauen.</p>
                    <p>Una de las obras conmemorativas más famosas es la estatua de la paz (평화의 소녀상). La estatua fue creada por los artistas coreanos Kim Seo-Kyung y Kim Eun-Sung. El 11 de diciembre de 2011, fue colocada frente a la Embajada de Japón en Seúl en conmemoración a la protesta de los miércoles número mil. Esta estatua se convirtió en un símbolo global de la lucha por verdad y justicia. En la actualidad, hay cientos de estatuas colocadas en Corea del Sur, de Paju en las cercanías al paralelo 38, a la isla de Jeju, diversas versiones de la estatua de la paz conmemoran a las “mujeres de confort” en espacios públicos. Además, el Korean Council organizó la colocación de estatuas en escuelas secundarias de Corea logrando colocar 239 estatuas de la paz.</p>
                    <p>La obra artista de los Kim se convirtió en un símbolo de memoria y justicia en otros países. Hay réplicas de la estatua de la paz en Shanghái, Hong, Kong, Sídney, Melbourne, Ratisbona, Frankfurt, Berlín, Dresde, Toronto, Nueva York, Michigan, Washington, Georgia, California y Connecticut. También hay memoriales de las “mujeres de confort” en Tainan, Manila, Borácay y diez en distintos espacios públicos de California, New Jersey y Virginia en los Estados Unidos.</p>
                </>)
        },
        {
            title: "Activismo social",
            summary: (
                <>
                    <p>El activismo internacional de organizaciones y fundaciones en defensa de las “mujeres de confort” ha crecido en los últimos años. Las principales organizaciones del mundo son:</p>
                </>
            ),
            text: (
                <>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Corea del Sur</p>
                        <div className={style.socActDesc}>
                            <p><a className={style.anchorTJ} href="http://www.nanum.org/eng/main/index.php" target="_blank">House of Sharing</a></p>
                            <p><a className={style.anchorTJ} href="https://womenandwar.net/kr/about-us/?ckattempt=1" target="_blank">Korean Council for Justice and Remembrance for the Issues of Military Sexual Slavery by Japan</a></p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>China continental</p>
                        <div className={style.socActDesc}>
                            <p>Research Center for Chinese Comfort Women (RCCW) – Normal Shanghai University</p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Taipéi</p>
                        <div className={style.socActDesc}>
                            <p>Taipei Women's Rescue Foundation– Comfort Women</p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Japón</p>
                        <div className={style.socActDesc}>
                            <p>Violence Against Women in War Network (VAWW-NET Japan) – Comfort Women</p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Filipinas</p>
                        <div className={style.socActDesc}>
                            <p>LILA-Pilipina</p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Estados Unidos</p>
                        <div className={style.socActDesc}>
                            <p><a className={style.anchorTJ} href="https://remembercomfortwomen.org/" target="_blank">Comfort Women Justice Coalition (CWJC)</a></p>
                            <p><a className={style.anchorTJ} href="https://comfort-women.org/?page_id=10763" target="_blank">Washington Coalition for Comfort Women Issues, Inc. (WCCW)</a></p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Alemania</p>
                        <div className={style.socActDesc}>
                            <p><a className={style.anchorTJ} href="https://trostfrauen.de/#:~:text=Die%20AG%20%E2%80%9ETrostfrauen%E2%80%9C%20im%20Korea,den%20Philippinen%20und%20anderen%20L%C3%A4ndern." target="_blank">AG "Trostfrauen" - Solidarity with "Comfort Women"</a></p>                      </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Gran Bretaña</p>
                        <div className={style.socActDesc}>
                            <p><a className={style.anchorTJ} href="https://justiceforcomfortwomen.org/" target="_blank">Justice for Comfort Women (JCW)</a></p>
                        </div>
                    </div>
                    <div className={style.socActDiv}>
                        <p className={style.socActTitle}>Canadá</p>
                        <div className={style.socActDesc}>
                            <p><a className={style.anchorTJ} href="https://www.alpha-canada.org/" target="_blank">Canada ALPHA- Comfort Women</a></p>
                        </div>
                    </div>
                </>)

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
                            <>
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
                            </>
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
