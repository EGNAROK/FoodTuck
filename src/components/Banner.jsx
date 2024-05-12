import React from 'react';
import style from '../styles/banner.module.css'
import { Link } from 'react-router-dom';
import playBtnVideo from '../assets/gallery/icons/banner_icons/Play.png'

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.background_image}>
                <div className={style.banner}>
                    <h3>Restaurant Active Process</h3>
                    <h2>
                        <span>We </span>
                        Document Every Food Bean Process untile it is saved
                    </h2>
                    <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
                    <div className={style.interface}>
                        <Link className={style.link}>Read More</Link>
                        <button className={style.play_video_btn}>
                            <img src={playBtnVideo} alt="play video btn" />   
                        </button>
                        <p>Play Video</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
