import style from './ComfortWomen.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import image from '../../assets/img/homeImg.png'

const ComfortWomen = () => {
    return (
        <>
            <div>
                <div className={style.descImgDiv}>
                    <div className={style.descDiv}>
                        <h2 className={style.descH2}>Mujeres de <br />Confort</h2>
                        <p className={style.descP}>Durante la Segunda Guerra Mundial, el término "Mujeres de Confort" se utilizó para encubrir a las mujeres esclavizadas sexualmente por el ejército japonés en Asia (1932-1945).</p>
                    </div>
                    <div>
                        <img className={style.descImg} src={image} alt="Mujeres de confort" />
                    </div>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.titleDiv}></div>
                    <div className={style.contentDiv}>
                        <div className={style.summaryDiv}> <p>“Mujeres de confort” es la traducción literal del término <span>慰安婦</span> utilizado por el ejército japonés para encubrir a las mujeres esclavizadas sexualmente por la Armada Imperial durante la guerra de avance de Japón en Asia (1932-1945). Es español, se las denomina también “mujeres de consuelo” o “mujeres de solaz”.</p></div>
                        <div className={style.textDiv}> <p>En Corea al comienzo se las llamaba chongshindae (정신대) que significa “cuerpo de mujeres voluntarias”. Se las denominaba así porque muchas mujeres reclutadas como trabajadoras de la Armada Imperial de Japón fueron esclavizadas sexualmente. Sin embargo, esta categoría distorsiona la experiencia traumática de las víctimas y genera confusiones dado que no todas las mujeres reclutadas para trabajar en las fábricas vinculadas a la guerra fueron esclavizadas sexualmente. Oficialmente, se las llama ianbu (위안부 - 慰安婦) que significa “mujeres de confort”. También se utiliza de manera cariñosa y respetuosa la palabra halmoni (할머니) que significa abuela. En otros países, como Filipinas, también se las llama abuelas (lolas).</p>
                           <p>Las víctimas pertenecieron a las colonias japonesas y a todos los territorios ocupados por Japón en el marco de la guerra. Se aplicaron diferentes mecanismos de rapto. Muchas víctimas fueron reclutadas con falsas promesas de trabajo, especialmente en el caso de las mujeres de las colonias japonesas. En algunos pocos casos fueron entregadas por vecinos o familiares. En la medida que la guerra avanzaba, muchas mujeres fueron directamente raptadas delante de sus familiares, conocidos, amigos o compañeros. Entre las víctimas japonesas se han descubierto casos de prostitutas derivabas a los sitios de esclavización sexual. Las “mujeres de confort” eran jóvenes. La mayoría eran vírgenes al momento del rapto. Se estima que las víctimas tenían entre 11 y 27 años. En todos los casos fueron sometidas a un control total de sus cuerpos mediante el uso de la violencia física y psicológica.</p> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComfortWomen;