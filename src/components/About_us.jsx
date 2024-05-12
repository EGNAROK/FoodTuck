import React from 'react';
import style from '../styles/about_us_component.module.css'
import checkIcon from '../assets/gallery/icons/home_page_icons/check_icon.png'
import firstSectionFirstDish from '../assets/gallery/images/home_page_images/first_section_first_dish.png'
import firstSectionSecondDish from '../assets/gallery/images/home_page_images/first_section_second_dish.png'
import firstSectionThirdDish from '../assets/gallery/images/home_page_images/first_section_third_dish.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className={style.about_us}>
            <div className={style.about_us_section}>
                <h3>About us</h3>
                <h2>
                    <span>We </span>
                    Create the best foody product
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <ul>
                    <li>
                        <img src={checkIcon} alt="check icon" />
                        Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </li>
                    <li>
                        <img src={checkIcon} alt="check icon" />
                        Quisque diam pellentesque bibendum non dui volutpat fringilla
                    </li>
                    <li>
                        <img src={checkIcon} alt="check icon" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                </ul>
                <Link to="/about" className={style.about_us_link}>Read More</Link>
            </div>
            <div className={style.our_dishes}>
                <img src={firstSectionFirstDish} alt="sendwich with egg" />
                <div className={style.aside}>
                    <img src={firstSectionSecondDish} alt="dish" />
                    <img src={firstSectionThirdDish} alt="sandwich with vegetables" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
