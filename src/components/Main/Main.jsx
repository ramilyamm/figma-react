import React from 'react';
import AboutUs from './section/AboutUs/AboutUs';
import Objects from './section/Objects/Objects';
import Sale from './section/Sale/Sale';
import Media from './section/Media/Media'
import OurOffice from './section/OurOffice/OurOffice';
import Partners from './section/Partners/Partners';


const Main = () => {
    return (
        <main>
            <AboutUs />
            <Objects />
            <Sale />
            <Media />
            <OurOffice />
            <Partners />
        </main>
    );
};

export default Main;


