import React from 'react';
import style from '../styles/our_chef.module.css'
import fifthSectionChiefChef from '../assets/gallery/images/home_page_images/fifth_screen_first_photo.png'
import fifthSectionAssistantChef from '../assets/gallery/images/home_page_images/fifth_screen_second_photo.png'
import fifthSectionAdvertisingChef from '../assets/gallery/images/home_page_images/fifth_screen_third_photo.png'
import fifthSectionChef from '../assets/gallery/images/home_page_images/fifth_screen_fourth_photo.png'
import { Link } from 'react-router-dom';


const OurChef = () => {
    return (
        <div className={style.our_chef}>
                    <h3>Chefs</h3>
                    <h2>
                        <span>Meet </span>
                        Our Chef
                    </h2>
                    <ul className={style.our_chef}>
                        <li>
                            <img src={fifthSectionChiefChef} alt="discount dish" />
                            <p>
                                <span>D.Estwood</span> <br />
                                Chief Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionAssistantChef} alt="burger" />
                            <p>
                                <span>D.Scoriesh</span> <br />
                                Assistant Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionAdvertisingChef} alt="chef salat" />
                            <p>
                                <span>M. William</span> <br />
                                Advertising Chef
                            </p>
                        </li>
                        <li>
                            <img src={fifthSectionChef} alt="donats" />
                            <p>
                                <span>W.Readfroad</span> <br />
                                Chef
                            </p>
                        </li>
                    </ul>
                    <Link to="/chef" className={style.link}>See More</Link>
                </div>
    );
}

export default OurChef;
