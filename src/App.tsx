import React from 'react';
import './index.css';
import {Contacts, Footer, Header, Main, Projects, Skills} from './components';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
