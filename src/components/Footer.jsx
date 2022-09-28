import React from 'react';
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    var footer =
    <footer className={s.footer}>
        <div className={s.footerContainer}>
            <ul>
                <li><a className={s.linkedin}href="https://www.linkedin.com/in/marianoibarra/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="mailto:marianoibarratesta@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li><a className={s.github} href="https://github.com/MarianoIT1/mitWeather"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
            <p>Designed and Build by Mariano Ibarra</p>
        </div> 
    </footer>;
    return footer;
}