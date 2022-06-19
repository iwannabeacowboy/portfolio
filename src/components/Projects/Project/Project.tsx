import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = ({title, description}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.preview}>
                <a className={s.viewButton}>View</a>
            </div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};