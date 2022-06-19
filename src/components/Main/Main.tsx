import React from 'react';
import s from './Main.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.introduction}>
                    <span>Hi There</span>
                    <h1>I am Yakov Katsura</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};