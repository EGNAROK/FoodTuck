import React from "react";
import Header from "../components/Header";
import style from "../styles/homePage.module.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import fasebookIcon from "../assets/gallery/icons/home_page_icons/facebook.svg";
import twitterIcon from "../assets/gallery/icons/home_page_icons/twitter.svg";
import pinterestIcon from "../assets/gallery/icons/home_page_icons/pinterest.svg";
import dishPhoto from "../assets/gallery/images/home_page_images/main_banner_dish.png";
import OurAchievements from "../components/Our_achievements";
import dill from "../assets/gallery/images/home_page_images/dill.png";
import Banner from "../components/Banner";
import BlogPostHomePage from "../components/Blog_post_home_page";
import Carousel from "../components/Carousel";
import carouselStyle from "../utils/carousel";
import ourMenuStyle from "../utils/our_menu_component";
import WhyChooseUs from "../components/Why_choose_us";
import FoodCategory from "../components/Food_category";
import OurChef from "../components/Our_chef";
import AboutUs from "../components/About_us";
import OurMenu from "../components/Our_menu";

const Home = () => {
    const { homePage } = carouselStyle;
    const { homePageMenu } = ourMenuStyle
    return (
        <div className={style.home_page_container}>
            <Header />
            <div className={style.main_banner_background}>
                <div className={style.main_banner}>
                    <div className={style.social_icons_container}>
                        <div className={style.color_line}></div>
                        <ul className={style.social_icons}>
                            <li>
                                <Link className={style.nav_link}>
                                    <img src={fasebookIcon} alt="fasebook icon" />
                                </Link>
                            </li>
                            <li>
                                <Link className={style.nav_link}>
                                    <img src={twitterIcon} alt="twitter icon" />
                                </Link>
                            </li>
                            <li>
                                <Link className={style.nav_link}>
                                    <img src={pinterestIcon} alt="pinterest icon" />
                                </Link>
                            </li>
                        </ul>
                        <div className={style.color_line}></div>
                    </div>
                    <div className={style.main}>
                        <h2>Its Quick & Amusing!</h2>
                        <h1>
                            <span className={style.the}>The </span>
                            <span>Art of speed food Quality</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                            sed pharetra dictum neque massa congue
                        </p>
                        <Link to="/menu" className={style.link}>See Menu</Link>
                    </div>
                    <div className={style.dish_photo}>
                        <img src={dishPhoto} alt="main dish" />
                    </div>
                </div>
            </div>
            <div className={style.content_container}>
                <AboutUs />
                <div className={style.background_image}>
                    <img src={dill} alt="dill" />
                </div>
                <FoodCategory />
                <WhyChooseUs />
                <OurAchievements />
                <OurMenu textStyle={homePageMenu}/>
                <OurChef />
                <Carousel textStyle={homePage} />
                <Banner />
                <BlogPostHomePage />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
