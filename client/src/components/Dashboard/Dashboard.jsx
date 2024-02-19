import style from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import React, { useState }from 'react';
import ContactMessages from './ContactMessages/ContactMessages';
import Publications from './Publications/Publications';

const Dashboard = () => {

    const [selectedTitle, setSelectedTitle] = useState("Publicaciones");

    const textData = [
        {
            title: "Publicaciones",
            component: (<Publications/>)

        },
        {
            title: "Contacto",
            component: (<ContactMessages/>)
        },
    ]

    return (
        <>
            <div className={style.infoDiv}>
                <div className={style.titleDiv}>
                    {textData.map(item => (
                        <div className={style.buttonsDiv}>
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
                        </div>
                    ))}
                </div>
                <div className={style.contentDiv}>
                    <div className={style.summaryDiv}>
                        {textData.find((item) => item.title === selectedTitle)?.component}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;