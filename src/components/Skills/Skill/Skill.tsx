import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = ({title, description}: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};