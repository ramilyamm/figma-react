import React from 'react';
import './Sale.css'
import left from '../../../../assets/images/left.png'
import right from '../../../../assets/images/right.png'
import house from '../../../../assets/images/saleImage.png'
import saleBottom from '../../../../assets/images/salebottom.png'


const Sale = () => {
    return (
        <section>
            <h1 className='title container'>Акции</h1>
            <div className='array'>
                <img className='left' src={left} alt="left" />
                <div className='sale_block'>
                    <img className='house' src={house} alt="house" />
                    <div className='sale_bottom'>
                        <img src={saleBottom} alt="" />
                    </div>
                </div>
                <img className='right' src={right} alt="right" />
            </div>
        </section>
    );
};

export default Sale;