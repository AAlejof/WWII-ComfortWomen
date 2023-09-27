import style from './CardDetail.module.css';
import React, { useState } from 'react';


const CardDetail = ({ onClose }) => {
    return (

        <div className={style.cardContainer}>
            <h3 className={style.name}>Gil Won-ok</h3>
            <h4 className={style.desc}>halmoni</h4>
            <div className={style.cardDescription}>
                <p className={style.cardP}>Gil Won-ok was born in 1928 in Heechun, Pyeongahnbuk-do, and moved to Pyongyang for her father’s work as a secondhand shop dealer. In 1940, when she was 12 years old (13 years old in Korea), her father was imprisoned for buying products from a thief, and Gil Won-ok started looking for jobs to pay for her father’s fines. She went to Harbin, China to find work but was abducted and forced to serve as a Japanese military “comfort woman.”
                    After being infected with a sexually transmitted disease, Gil Won-ok came back home. In 1942, when she was 15 years old, she was helping her family business that was getting worse, and went to Shijiazhuang, China, to find work with her friend. However, she ended up as a “comfort woman,” again.
                    She could not return home after the liberation because the war had split Korea in half. She made a living through a compound shop or as a street vendor.
                    When she was 31 years old, she adopted a son and continued working in the market. She registered as a victim of Japanese military sexual slavery in 1998. Since 2004, she lives in Peaceful Our Home (Urijip of Peace), a shelter for survivors.
                    After registering as a victim, she travels to inform people of the Japanese military sexual slavery and passionately engages in different activities such as the Wednesday Demonstration to resolve the Japanese military sexual slavery issue. On International Women’s Day on March 8th, 2012, she established the Butterfly Fund, to direct any reparation she would receive from the Japanese government to support victims of sexual violence in armed conflict.
                    On May 17th, 2017, Gil Won-ok founded Gil Won-ok Women’s Peace Prize to support activists who work for women’s rights, peace, and reunification movement in Korea.</p>
            </div>
            <button className={style.closeBtn} onClick={onClose}>x</button>
        </div>

    )
}

export default CardDetail;