import React from 'react';
import s from './Skills.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill
                        title={'JS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ullam.'}
                    />
                    <Skill
                        title={'CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ullam.'}
                    />
                    <Skill
                        title={'React'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ullam.'}
                    />
                </div>
            </div>
        </div>
    );
};