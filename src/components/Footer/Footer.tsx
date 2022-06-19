import React from 'react';
import s from './Footer.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <span>Yakov Katsura</span>
                <div className={s.block}>
                    <div className={s.links}></div>
                    <div className={s.links}></div>
                    <div className={s.links}></div>
                    <div className={s.links}></div>
                </div>
            </div>
        </div>
    );
};