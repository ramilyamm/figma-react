import React from 'react';
import './Objects.css'
import adres from '../../../../assets/images/adres.png'
import aleksandriya from '../../../../assets/images/aleksandriya.png'
import aleksandriyaIcon from '../../../../assets/images/aleksandriyaIcon.png'
import alClassic from '../../../../assets/images/alclassic.png'
import alClassicPlus from '../../../../assets/images/alclassicplus.png'
import alClassicIcon from '../../../../assets/images/alclassicIcon.png'
import italy from '../../../../assets/images/italy.png'
import italyIcon from '../../../../assets/images/italyIcon.png'
import asanbai from '../../../../assets/images/asanbai.png'
import asanbaiIcon from '../../../../assets/images/asanbaiIcon.png'
import continental from '../../../../assets/images/continetal.png'



const Objects = () => {
    return (
        <section>
            <div className='container'>
                <div className='object_top_block'>
                    <h1 className='title'>Объекты</h1>
                    <div className='obj_info'>
                        <button className='btn_obj'>Новые</button>
                        <h2 className='obj_left'>Строящиеся</h2>
                        <h2 className='obj_right'>Завершенные</h2>
                    </div>
                </div>

                <div className='obj_card'>
                    <div className='card'>
                        <img className='obj_img' src={aleksandriya} alt="aleksandriya" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Александрия</h3>
                                <img className='aleks_icon' src={aleksandriyaIcon} alt="aleksandriyaIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул.Токтогула/Исанова</p>
                            </div>
                        </div>
                    </div>


                    <div className='card'>
                        <img className='obj_img' src={alClassic} alt="alClassic" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Эль Классик</h3>
                                <img className='classic_icon' src={alClassicIcon} alt="alClassicIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул. Коенкозова/ул. Чуйкова</p>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='obj_img' src={alClassicPlus} alt="alClassicPlus" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Эль Классик Плюс</h3>
                                <img className='classic_icon' src={alClassicIcon} alt="alClassicIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул.Коенкозова/Чуйкова</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='obj_img' src={italy} alt="italy" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Итальянский квартал</h3>
                                <img className='italy_icon' src={italyIcon} alt="italyIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул.С.Батора/А.Токомбаева</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='obj_img' src={asanbai} alt="asanbai" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Асанбай ордо</h3>
                                <img className='asan_icon' src={asanbaiIcon} alt="asanbaiIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул.С.Батора/А.Токомбаева</p>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='obj_img' src={continental} alt="continental" />
                        <div className='card_info'>
                            <div className='card_wp'>
                                <h3 className='card_title'>Континенталь</h3>
                                <img className='aleks_icon' src={aleksandriyaIcon} alt="aleksandriyaIcon" />
                            </div>
                            <div className='adresa'>
                                <img className='adres' src={adres} alt="adres" />
                                <p className='card_text'>ул. Элебаева/Кулатова</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Objects;