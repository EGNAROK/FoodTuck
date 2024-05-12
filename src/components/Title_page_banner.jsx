import React from 'react';
import style from '../styles/title_page_banner.module.css'
import { Link } from 'react-router-dom';

const TitlePageBanner = (props) => {
    return (
        <div className={style.background_image}>
            <div className={style.title_page}>
                <h2 style={{color:"white"}}>{props.pageTitle.title}</h2>
                <div className={style.aside}>
                    <Link to="/" className={style.link}>Home</Link> 
                    <span>⟩</span>
                    <p>{props.pageTitle.pageTitle}</p>
                </div>
            </div>
        </div>
    );
}

export default TitlePageBanner;
