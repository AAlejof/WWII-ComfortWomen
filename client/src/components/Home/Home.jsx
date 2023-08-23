import style from './Home.module.css';
import { Link } from 'react-router-dom';
import React from 'react';
import ComfortWomen from '../ComfortWomen/ComfortWomen'

const Home = () => {
    return (
        <>
            <div>
                <ComfortWomen/>
            </div>
        </>
    )
}

export default Home;