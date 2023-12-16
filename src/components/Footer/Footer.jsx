import React from 'react';
import './Footer.css'
import soc from '../../assets/images/footerSoc.png'
import footerImg from '../../assets/images/footerImg.png'

const Footer = () => {
    return (
        <footer>
            <div className='footer_block container'>
                <div className='footer_text'>
                    <p className='footer_info'>О нас
                        Объекты
                        Онлайн-камеры
                        Новости
                        Медиа
                        Вакансии
                        Забота о клиентах</p>
                </div>
                <div className='footer_text'>
                    <p className='footer_company'>Управляющая компания Агентская программа Способы оплаты Barter.kg Контакты Офисы продаж</p>
                </div>
                <div className='footer_text'>
                    <p className='footer_address'>Адрес:
                        г.Бишкек, ул. Абдрахманова, 170/1, бизнес-центр «Ордо»,
                        7 этаж</p>

                    <img className='soc' src={soc} alt="" />

                </div>
                <div className='footer_text'>
                    <p className='footer_tel'>Телефон:
                        0 (555) 555 - 555
                        0 (312) 463 - 434</p>
                    {/* <a className='footer_tel' href="tel: 
0 (555) 555 - 555
0 (312) 463 - 434">Телефон:
                        0 (555) 555 - 555
                        0 (312) 463 - 434</a> */}

                    <p className='footer_email'>E-mail:
                        elithouse@gmail.com</p>
                </div>
                <div className='footer_logo'>
                    <img src={footerImg} alt="footer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;