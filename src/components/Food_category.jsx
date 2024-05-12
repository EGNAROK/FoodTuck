import React from 'react';
import style from '../styles/food_category.module.css'
import secondSectionFirstDish from '../assets/gallery/images/home_page_images/second_section_first_dish.png'
import secondSectionSecondDish from '../assets/gallery/images/home_page_images/second_section_second_dish.png'
import secondSectionThirdDish from '../assets/gallery/images/home_page_images/second_section_third_dish.png'
import secondSectionFourthDish from '../assets/gallery/images/home_page_images/second_section_fourth_dish.png'

const FoodCategory = () => {
    return (
        <div className={style.food_category}>
                    <h3>Food Category</h3>
                    <h2>
                        <span>Choose </span>
                        Food Iteam
                    </h2>
                    <ul className={style.food_item}>
                        <li>
                            <img src={secondSectionFirstDish} alt="discount dish" />
                            <p>Save 30%</p>
                            <p>Fast Food Dish</p>
                        </li>
                        <li>
                            <img src={secondSectionSecondDish} alt="burger" />
                        </li>
                        <li>
                            <img src={secondSectionThirdDish} alt="chef salat" />
                        </li>
                        <li>
                            <img src={secondSectionFourthDish} alt="donats" />
                        </li>
                    </ul>
                </div>
    );
}

export default FoodCategory;
