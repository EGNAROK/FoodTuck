import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pageTitleArr from '../utils/page_banner'
import TitlePageBanner from '../components/Title_page_banner';
import style from '../styles/aboutPage.module.css'
import { Link } from 'react-router-dom';
import firstDiash from '../assets/gallery/images/about_images/1_dish.png'
import secondDish from '../assets/gallery/images/about_images/2_dish.png'
import thirdDish from '../assets/gallery/images/about_images/3_dish.png'
import mainDish from '../assets/gallery/images/about_images/dish.png'
import playIcon from '../assets/gallery/icons/about_icons/Play.png'
import studentIcon from '../assets/gallery/icons/about_icons/Student.png'
import coffeeIcon from '../assets/gallery/icons/about_icons/Coffee.png'
import personIcon from '../assets/gallery/icons/about_icons/Person.png'
import AboutPageBanner from '../components/About_page_banner';
import Carousel from '../components/Carousel';
import carouselStyle from '../utils/carousel'
import OurMenu from '../components/Our_menu';
import ourMenuStyle from "../utils/our_menu_component";
import { useCart } from '../utils/context';

const About = () => {
    const { videoModalOpen, openVideoModal, closeVideoModal} = useCart()
    const [{aboutUs}] = pageTitleArr
    const {aboutPage} = carouselStyle
    const {aboutPageMenu} = ourMenuStyle
    console.log(aboutPage);
    return (
        <div>
            <Header/>
            <TitlePageBanner pageTitle={aboutUs}/>
            <div className={style.main_container}>
                <div className={style.first_section}>
                    <div className={style.dishes}>
                        <img className={style.tacos} src={firstDiash} alt="tacos" />
                        <div className={style.second_dishes}>
                            <img src={secondDish} alt="nuggets" />
                            <img src={thirdDish} alt="salad" />
                        </div>
                    </div>
                    <div className={style.description}>
                        <h3>About us</h3>
                        <h2>Food is an important part Of a balanced Diet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className={style.nav_section}>
                            <Link className={style.link}>Show more</Link>
                            <button className={style.play_video_btn}>
                                <img src={playIcon} alt="" onClick={() => openVideoModal()}/>
                            </button>  
                            <p>Watch video </p>                          
                        </div>
                    </div>                    
                </div>
                <div className={style.second_section}>
                    <h2>Why Choose us</h2>
                    <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
                    <img className={style.main_dish} src={mainDish} alt="main dish" />
                    <div className={style.cards}>
                        <div className={style.card}>
                            <img src={studentIcon} alt="student" />
                            <h3>Best Chef</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className={style.card}>
                            <img src={coffeeIcon} alt="coffee" />
                            <h3>120 Item food</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className={style.card}>
                            <img src={personIcon} alt="person" />
                            <h3>Clean Environment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                    </div>
                </div>
                <AboutPageBanner/>
                <Carousel textStyle={aboutPage}/>
                <OurMenu textStyle={aboutPageMenu}/>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
