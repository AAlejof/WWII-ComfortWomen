import React from 'react';
import halmonis from '../halmonisData';
import style from './Card.module.css';
// import image from '../../../assets/img/survivors/gilWon-okImg.jpeg';


const Card = ({ onClick, halmoni }) => {

  return (
    <div className={style.cardContainer} onClick={() => onClick(halmoni.id)}>
      <div>
        <img className={style.cardImg} src={halmoni?.image} alt="Survivor img" />
      </div>
      <div className={style.textDiv}>
        <div className={style.nameDescDiv}>
          <h3 className={style.name}>{halmoni?.name}</h3>
          <h4 className={style.desc}>{halmoni?.description}</h4>
        </div>
        <div className={style.nameDescDiv}>
          <h3 className={style.name}>{halmoni?.nameKorean}</h3>
          <h4 className={style.desc}>{halmoni?.descriptionK}</h4>
        </div>
        <span className={style.dateSpan}>{halmoni?.dates}</span>
        <div className={style.cardDescription}>
          <p className={style.cardP}>{halmoni?.quote}</p>
          <p className={style.cardP}>{halmoni?.quoteKorean}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
