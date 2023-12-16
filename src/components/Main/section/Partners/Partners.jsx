import React from 'react';
import './Partners.css'
import barter from '../../../../assets/images/partners.png'
import bartero from '../../../../assets/images/barter.png'

const Partners = () => {
    return (
        <section>
            <div className='container'>
                <h1 className='title'>Партнёры</h1>
                <div className='img_barter'>
                    <img className='barter' src={barter} alt="barter" />
                    <img className='barter' src={barter} alt="barter" />

                    <div className='barter_orange'>
                        <img className='b_orange' src={bartero} alt="barter" />
                        <p className='text_barter'>Подробнее</p>
                    </div>

                    <img className='barter' src={barter} alt="barter" />
                    <img className='barter' src={barter} alt="barter" />
                </div>
            </div>
        </section>
    );
};

export default Partners;