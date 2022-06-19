import React from 'react';
import s from './Projects.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project
                        title={'To-do List'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, temporibus.'}
                    />
                    <Project
                        title={'Social Network'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, temporibus.'}
                    />
                </div>
            </div>
        </div>
    );
};