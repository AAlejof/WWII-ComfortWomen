import style from './Home.module.css';
import React from 'react';
import ComfortWomen from '../ComfortWomen/ComfortWomen'
import TruthJustice from '../Truth&Justice/Truth&Justice';
import Difussion from '../Difussion/Difussion';
import News from '../News/News';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <div>
                <div id="comfortWomen">
                    <ComfortWomen id="comfortWomen"/>
                </div>
                <div id="truthJustice">
                    <TruthJustice/>
                </div>
                <div id="difussion">
                    <Difussion/>
                </div>
                <div id="news">
                    <News/>
                </div>
                <div id="contact">
                    <Contact/>
                </div>
            </div>
        </>
    )
}

export default Home;
