import React from 'react';
import style from '../styles/about_page_banner.module.css'
import firstChef from '../assets/gallery/images/about_images/chef_1.png'
import secondChef from '../assets/gallery/images/about_images/chef_2.png'
import thirdChef from '../assets/gallery/images/about_images/chef_3.png'
import fourthChef from '../assets/gallery/images/about_images/chef_4.png'
import { Link } from 'react-router-dom';

const AboutPageBanner = () => {
    return (
        <div className={style.background_banner}>
            <div className={style.main}>
                <h2>Team Member</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</h3>
                <div className={style.chef_cards}>
                    <div className={style.chef}>
                        <Link>
                            <img src={firstChef} alt="Mark Henry" />
                        </Link>
                        <h4>Mark Henry</h4>
                        <p className={style.job_title}>Chef</p>
                    </div>
                    <div className={style.chef}>
                        <Link>
                            <img src={secondChef} alt="Lucky Helen" />  
                        </Link>
                        <h4>Lucky Helen</h4>
                        <p className={style.job_title}>Chef</p>
                    </div>
                    <div className={style.chef}>
                        <Link>
                            <img src={thirdChef} alt="Moon Henry" />
                        </Link>
                        <h4>Moon Henry</h4>
                        <p className={style.job_title}>Chef</p>
                    </div>
                    <div className={style.chef}>
                        <Link>
                            <img src={fourthChef} alt="Tom Monrow" />
                        </Link>
                        <h4>Tom Monrow</h4>
                        <p className={style.job_title}>Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPageBanner;
