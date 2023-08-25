import style from './Home.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import ComfortWomen from '../ComfortWomen/ComfortWomen'
import TruthJustice from '../Truth&Justice/Truth&Justice';

const Home = () => {
    return (
        <>
            <div>
                <ComfortWomen/>
                <TruthJustice/>
            </div>
        </>
    )
}

export default Home;