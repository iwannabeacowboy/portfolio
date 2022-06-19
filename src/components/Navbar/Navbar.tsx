import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <a href="">HOME</a>
            <a href="">MY SKILLS</a>
            <a href="">PORTFOLIO</a>
            <a href="">CONTACT ME</a>
        </div>
    );
};