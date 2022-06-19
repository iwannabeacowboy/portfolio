import React, {FormEvent} from 'react';
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea cols={30} rows={10}/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};