import React from 'react';
import style from './Card.module.css';
import image from '../../../assets/img/survivors/gilWon-okImg.jpeg';


const Card = ({ onClick }) => {

    

  return (
    <div className={style.cardContainer} onClick={onClick}>
      <div>
        <img className={style.cardImg} src={image} alt="Survivor img" />
      </div>
      <h3 className={style.name}>Gil Won-ok</h3>
      <h4 className={style.desc}>halmoni</h4>
      <div className={style.cardDescription}>
        <p className={style.cardP}>"My scars will never fade away"</p>
      </div>
    </div>
  );
}

export default Card;
