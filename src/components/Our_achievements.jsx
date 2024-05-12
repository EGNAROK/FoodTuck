import React from 'react';
import style from '../styles/achievements.module.css'
import first_img from '../assets/gallery/images/achievements_images/first_group.png'
import second_img from '../assets/gallery/images/achievements_images/second_group.png'
import third_img from '../assets/gallery/images/achievements_images/third_group.png'
import fourth_img from '../assets/gallery/images/achievements_images/fourth_group.png'

const OurAchievements = () => {
    return (
        <div>
            <div className={style.container}>
                <div className={style.background_image}>
                    <div className={style.achievements}>
                        <div className={style.description}>
                            <img src={first_img} alt="" />
                            <p>
                                <span>Professional Chefs </span>
                                <span>420</span>
                            </p>
                        </div>
                        <div className={style.description}>
                            <img src={second_img} alt="" />
                            <p>
                                <span>Items Of Food </span>
                                <span>320</span>
                            </p>
                        </div>
                        <div className={style.description}>
                            <img src={third_img} alt="" />
                            <p>
                                <span>Years Of Experienced </span>
                                <span>30+</span>
                            </p>
                        </div>
                        <div className={style.description}>
                            <img src={fourth_img} alt="" />
                            <p>
                                <span>Happy Customers </span>
                                <span>220</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurAchievements;
