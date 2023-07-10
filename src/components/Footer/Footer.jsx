import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer__wrapper">
            <ul className="footer__list"> Контактаня информация
                <li className="footer__list-item">Мы в телеграм</li>
                <li className="footer__list-item">Контарный телефон</li>
                <li className="footer__list-item">E-mail для предложений</li>
            </ul>
        </footer>
    )
}

export default Footer