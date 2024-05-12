import React from 'react';
import style from '../styles/footer.module.css'
import icon from '../assets/gallery/icons/footer_icons/ClockClockwise.png';
import firstFoodPhoto from '../assets/gallery/images/footer_images/first_food_photo.png';
import secondFoodPhoto from '../assets/gallery/images/footer_images/second_food_photo.png';
import thirdFoodPhoto from '../assets/gallery/images/footer_images/third_food_photo.png';
import grassImg from '../assets/gallery/images/footer_images/grass.png'
import fasebookIcon from '../assets/gallery/icons/footer_icons/facebook.svg'
import twitterIcon from '../assets/gallery/icons/footer_icons/twitter.svg'
import instagramIcon from '../assets/gallery/icons/footer_icons/instagram.svg'
import youtubeIcon from '../assets/gallery/icons/footer_icons/youtube.svg'
import pinterestIcon from '../assets/gallery/icons/footer_icons/pinterest.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.footer_upper_section}>
                    <div className={style.aside}>
                        <div className={style.description}>
                            <h3 className={style.footer_title_question}>
                                <span className={style.still}>Still </span>
                                <span>You Need Our Support ?</span>
                            </h3>
                            <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                        </div>
                        <div className={style.form_container}>
                            <form action="#" method="post">
                                <label for="email">
                                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                                </label>
                                <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                    <div className={style.bottom_border}></div>
                </div>
                <div className={style.footer_bottom_section}>
                    <div className={style.footer_first_section}>
                        <h4>About Us.</h4>
                        <p className={style.description}>orporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</p>
                        <div className={style.aside}>
                            <img src={icon} alt="Clock icon" />
                            <p className={style.work_time}>
                                <span>Opening Houres</span>
                                <span>Mon - Sat(8.00 - 6.00)</span>
                                <span>Sunday - Closed</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.footer_second_section}>
                        <h4>Useful Links</h4>
                        <ul className={style.nav_footer}>
                            <li>
                                <Link to="/" className={style.nav_link}>Home</Link>
                            </li>
                            <li>
                                <Link to="/menu" className={style.nav_link}>Menu</Link>
                            </li>
                            <li>
                                <Link to="/blog" className={style.nav_link}>Blog</Link>
                            </li>
                            <li>
                                <Link to="/chef" className={style.nav_link}>Chef</Link>
                            </li>
                            <li>
                                <Link to="/about" className={style.nav_link}>About</Link>
                            </li>
                            <li>
                                <Link to="/" className={style.nav_link}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.third_and_fourth_sections}>
                        <div className={style.footer_third_section}>
                            <h4>Useful Links</h4>
                            <ul className={style.nav_footer}>
                                <li>
                                    <Link to="/FAQ" className={style.nav_link}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/" className={style.nav_link}>Term & conditions</Link>
                                </li>
                                <li>
                                    <Link to="/" className={style.nav_link}>Reporting</Link>
                                </li>
                                <li>
                                    <Link to="/" className={style.nav_link}>Documentation</Link>
                                </li>
                                <li>
                                    <Link to="/" className={style.nav_link}>Support Policy</Link>
                                </li>
                                <li>
                                    <Link to="/" className={style.nav_link}>Privcy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footer_fourth_section}>
                            <h4>Recent Post</h4>
                            <div className={style.aside}>
                                <img src={firstFoodPhoto} alt="Clock icon" />
                                <p className={style.post}>
                                    <span>20 Feb 2022</span>
                                    <span>Keep Your Business </span>
                                </p>
                            </div>
                            <div className={style.aside}>
                                <img src={secondFoodPhoto} alt="Clock icon" />
                                <p className={style.post}>
                                    <span>20 Feb 2022</span>
                                    <span>Keep Your Business </span>
                                </p>
                            </div>
                            <div className={style.aside}>
                                <img src={thirdFoodPhoto} alt="Clock icon" />
                                <p className={style.post}>
                                    <span>20 Feb 2022</span>
                                    <span>Keep Your Business </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.color_section}>
                <div className={style.color_section_content}>
                    <div>
                        <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    </div>
                    <ul className={style.social_icons}>
                        <li>
                            <Link className={style.nav_link}><img src={fasebookIcon} alt="fasebook icon" /></Link>
                        </li>
                        <li>
                            <Link className={style.nav_link}><img src={twitterIcon} alt="twitter icon" /></Link>
                        </li>
                        <li>
                            <Link className={style.nav_link}><img src={instagramIcon} alt="instagram icon" /></Link>
                        </li>
                        <li>
                            <Link className={style.nav_link}><img src={youtubeIcon} alt="youtube icon" /></Link>
                        </li>
                        <li>
                            <Link className={style.nav_link}><img src={pinterestIcon} alt="pinterest icon" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.grass_image}>
                <img src={grassImg} alt="" />
            </div>
        </div>
    );
}

export default Footer;
