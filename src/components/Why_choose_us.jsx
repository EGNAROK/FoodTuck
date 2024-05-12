import React from 'react';
import style from '../styles/why_choose_us.module.css'
import thirdSectionFirstDish from '../assets/gallery/images/home_page_images/third_section_first_dish.png'
import thirdSectionSecondDish from '../assets/gallery/images/home_page_images/third_section_second_dish.png'
import thirdSectionThirdDish from '../assets/gallery/images/home_page_images/third_section_third_dish.png'
import thirdSectionFourthDish from '../assets/gallery/images/home_page_images/third_section_fourth_dish.png'
import thirdSectionFifthDish from '../assets/gallery/images/home_page_images/third_section_fifth_dish.png'
import thirdSectionSixthDish from '../assets/gallery/images/home_page_images/third_section_sixth_dish.png'
import thirdSectionFastFoodIcon from '../assets/gallery/icons/home_page_icons/third_section_fast_food_icon.png'
import thirdSectionLunchIcon from '../assets/gallery/icons/home_page_icons/third_section_luch_icon.png'
import thirdSectionDinnerIcon from '../assets/gallery/icons/home_page_icons/third_section_dinner_icon.png'

const WhyChooseUs = () => {
    return (
        <div className={style.why_choose_us}>
                    <div className={style.our_dishes}>
                        <div className={style.first_block}>
                            <img src={thirdSectionFirstDish} alt="tacos" />
                            <img src={thirdSectionSecondDish} alt="burger" />
                        </div>
                        <div className={style.second_block}>
                            <div className={style.first_indoor_unit}>
                                <img src={thirdSectionThirdDish} alt="nuggets" />
                                <img src={thirdSectionFourthDish} alt="cheeseburger" />
                            </div>
                            <div className={style.second_indoor_unit}>
                                <img src={thirdSectionFifthDish} alt="burger menu" />
                                <img src={thirdSectionSixthDish} alt="meet with brockley" />
                            </div>
                        </div>
                    </div>
                    <div className={style.why_we_description}>
                        <h3>Why Choose us</h3>
                        <h2>
                            <span>Extra </span>
                            ordinary taste And Experienced 
                        </h2>
                        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className={style.aside}>
                            <div>
                                <img src={thirdSectionFastFoodIcon} alt="burger" />
                                <p>Fast Food</p>
                            </div>
                            <div>
                                <img src={thirdSectionLunchIcon} alt="cookie" />
                                <p>Lunch</p>
                            </div>
                            <div>
                                <img src={thirdSectionDinnerIcon} alt="wine" />
                                <p>Dinner</p>
                            </div>
                        </div>
                        <div className={style.our_experiense}>
                            <div></div>
                            <p className={style.number}>30+</p>
                            <p className={style.exp_desc}>
                                <span>Years of </span> 
                                Experienced
                            </p>
                        </div>
                    </div>
                </div>
    );
}

export default WhyChooseUs;
