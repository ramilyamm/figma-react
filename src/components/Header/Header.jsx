import React from 'react';
import './Header.css'
import logo from '../../assets/images/elite.png'
import face from '../../assets/images/face.png'
import yt from '../../assets/images/youtube.png'
import insta from '../../assets/images/insta.png'
import whatsapp from '../../assets/images/whats.png'
import sun from '../../assets/images/sun.png'

const Header = () => {
    return (
        <header>
            <nav>
                <img className='elite_logo' width={150} src={logo} alt="logo" />
                <ul className='menu'>
                    <li className='menu_item'>О нас</li>
                    <li className='menu_item'>Объекты</li>
                    <li className='menu_item'>Коммерция</li>
                    <li className='menu_item'>Новости</li>
                    <li className='menu_item'>Забота о клиентах</li>
                    <li className='menu_item'>Инвесторам</li>
                    <li className='menu_item'>Контакты</li>
                </ul>
                <div className='img_title'>
                    <select id="count">
                        <option className='opt' value="Ru">Ru</option>
                    </select>
                    <img src={face} alt="facebook" />
                    <img src={yt} alt="you" />
                    <img src={insta} alt="inst" />
                    <img src={whatsapp} alt="whatsapp" />
                    <a href="tel:0555 555 555">0555 555 555</a>
                    <img src={sun} alt="sun" />
                </div>
            </nav>

            <button className='header_btn_left'>Мы работаем онлайн</button>
            <button className='header_btn_right'>Оставить заявку</button>
        </header>
    );
};

export default Header;