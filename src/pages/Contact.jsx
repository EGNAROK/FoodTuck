import React from 'react';
import Header from '../components/Header';
import TitlePageBanner from '../components/Title_page_banner';
import pageTitleArr from '../utils/page_banner'
import Footer from '../components/Footer';
import style from '../styles/contact.module.css'
import Map from '../components/Map';

const Contact = () => {
    const [{ ourContact }] = pageTitleArr
    return (
        <div className={style.contact_page}>
            <Header />
            <TitlePageBanner pageTitle={ourContact} />
            <div className={style.background}>
                <div>
                    
                </div>
                <div className={style.map_container}>
                    <Map />
                    <div className={style.aside}>
                        <ul className={style.adress}>
                            <li className={style.main_text}>We are always happy to see you at <span>Foodtuck </span>restaurant</li>
                            <li>Vinnytsia city</li>
                            <li>Kosmonavtiv Avenue 79</li>
                        </ul>
                        <ul className={style.contacts}>
                            <li>Our contacts:</li>
                            <li>Email: <span>Foodtuck@gmail.com</span></li>
                            <li>Delivery: <span>+(380) 000 00 01</span></li>
                            <li>Hotline: <span>+(380) 000 00 02</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
