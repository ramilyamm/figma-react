import React from 'react';
import './AboutUs.css'
import keyImg from '../../../../assets/images/about-1.png'
import choise from '../../../../assets/images/about-2.png'
import years from '../../../../assets/images/about-3.png'

const AboutUs = () => {
    return (
        <section>
            <div className='about_us'>
                <div className='container'>
                    <div className='aboutus_left'>
                        <h1 className='title'>О нас</h1>
                        <p className='left_text'>
                            Строительная компания Elite House была основана в 2013 году и является одним
                            из лидеров строительной отрасли Кыргызстана.
                            Компания Elite House не привлекает займы и работает исключительно на собственные средства.
                        </p>
                        <p className='left_text'>
                            По итогам 2019 года компания Elite House была признана «Лучшей компанией
                            по строительству многоэтажных домов премиум-класса в Кыргызстане».
                        </p>
                    </div>

                    <div className='aboutus_right'>
                        <div className='about_us_block'>
                            <img className='keyimg' src={keyImg} alt="keyImg" />
                            <div className='right_block'>
                                <h2 className='right_info'>1000</h2>
                                <p className='right_text'>и более дольщиков</p>
                            </div>
                        </div>
                        <div className='about_us_block'>
                            <img className='choise' src={choise} alt="choise" />
                            <div className='right_block'>
                                <h2 className='right_info'>#1</h2>
                                <p className='right_text'>выбор года 2019</p>
                            </div>
                        </div>
                        <div className='about_us_block'>
                            <img className='years' src={years} alt="years" />
                            <div className='right_block'>
                                <h2 className='right_info'>7</h2>
                                <p className='right_text'>лет на рынке</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;

