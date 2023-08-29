import style from './Home.module.css';
import { Link } from 'react-router-dom';
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
                <ComfortWomen/>
                <TruthJustice/>
                <Difussion/>
                <News/>
                <Contact/>
            </div>
        </>
    )
}

export default Home;