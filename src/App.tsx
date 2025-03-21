import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import {AboutMe} from "./layout/sections/AboutMe";
import {Projects} from "./layout/sections/Projects";
import {Skills} from "./layout/sections/Skills";
import {Contacts} from "./layout/sections/Contacts";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
