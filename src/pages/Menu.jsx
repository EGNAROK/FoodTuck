import React from 'react';
import Header from '../components/Header';
import MenuList from '../components/Menu_list';
import menuData from '../utils/get_menu_data'
import OurAchievements from '../components/Our_achievements';
import TitlePageBanner from '../components/Title_page_banner';
import pageTitleArr from '../utils/page_banner'
import Footer from '../components/Footer';
import style from '../styles/menuPage.module.css'
import firstPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_1.png'
import secondPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_2.png'
import thirdPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_3.png'
import fourthPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_4.png'
import fifthPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_5.png'
import sixthPartnerLogo from '../assets/gallery/images/menu_images/partner_logo_6.png'


const Menu = () => {
    const [{ firstObject, secondObject }] = menuData
    const [{ ourMenu }] = pageTitleArr
    return (
        <div>
            <Header />
            <TitlePageBanner pageTitle={ourMenu} />
            <MenuList menu={firstObject} />
            <OurAchievements />
            <MenuList menu={secondObject} />
            <div className={style.our_partners}>
                <h5>Partners & Clients</h5>
                <h2>We work with the best pepole</h2>
                <div className={style.partners_logo}>
                    <img src={firstPartnerLogo} alt="Restaurant" />
                    <img src={secondPartnerLogo} alt="Bakery" />
                    <img src={thirdPartnerLogo} alt="Fork & Spoon" />
                    <img src={fourthPartnerLogo} alt="WOLF COFFEE" />
                    <img src={fifthPartnerLogo} alt="BISTRO" />
                    <img src={sixthPartnerLogo} alt="BAKERY" />
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Menu;
