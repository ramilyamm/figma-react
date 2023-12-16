import React from 'react';
import './Media.css'
import left from '../../../../assets/images/left.png'
import right from '../../../../assets/images/right.png'
import office from '../../../../assets/images/med1.png'
import colleagues from '../../../../assets/images/med2.png'
import leading from '../../../../assets/images/med3.png'

const Media = () => {
    return (
        <section>
            <h1 className='title container'>Медиа</h1>
            <div className='array'>
                <img className='left' src={left} alt="left" />
                <div className='media_cards container'>
                    <div className='media_block'>
                        <img className='office' src={office} alt="office" />
                        <div className='media_info'>
                            <h2 className='card_title_media'>Новые офисы</h2>
                            <p className='media_text'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className='media_date'>22.10.2020</p>
                        </div>
                    </div>

                    <div className='media_block'>
                        <img className='office' src={colleagues} alt="colleagues" />
                        <div className='media_info'>
                            <h2 className='card_title_media'>Новые офисы</h2>
                            <p className='media_text'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className='media_date'>22.10.2020</p>
                        </div>
                    </div>

                    <div className='media_block'>
                        <img className='office' src={leading} alt="leading" />
                        <div className='media_info'>
                            <h2 className='card_title_media'>Новые офисы</h2>
                            <p className='media_text'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более...</p>
                            <p className='media_date'>22.10.2020</p>
                        </div>
                    </div>
                </div>
                <img className='right' src={right} alt="right" />
            </div>
        </section >
    );
};

export default Media;