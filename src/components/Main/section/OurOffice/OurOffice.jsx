import React from 'react';
import './OurOffice.css'
import Officeimg from '../../../../assets/images/officeImg.png'
import officeMap from '../../../../assets/images/officeMap.png'



const OurOffice = () => {
    return (
        <section>
            <h1 className='title container'>Наши офисы</h1>
            <div className='our_office '>
                <div className='office_card container'>
                    <div>
                        <img className='bg_office' src={Officeimg} alt="img" />
                    </div>
                    <div>
                        <p className='address'>Адрес:
                            г.Бишкек, ул. Абдрахманова, 170/1, бизнес-центр «Ордо», 7 этаж</p>
                    </div>

                    <div className='our_office_down'>
                        <a className='tel' href="tel: 
                        0 (555) 555 - 555
                        0 (312) 463 - 434">Телефон:
                            0 (555) 555 - 555
                            0 (312) 463 - 434</a>
                        <p className='grafic'>График работы: c 9:00 до 20:00</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurOffice;