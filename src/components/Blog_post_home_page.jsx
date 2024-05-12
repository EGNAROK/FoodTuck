import React from 'react';
import style from '../styles/blog_post_home_page.module.css'
import { Link } from 'react-router-dom';
import firstDish from '../assets/gallery/images/blog_post_home_page/first_dish.png'
import secondDish from '../assets/gallery/images/blog_post_home_page/second_dish.png'
import thirdDish from '../assets/gallery/images/blog_post_home_page/third_dish.png'
import likeIcon from '../assets/gallery/icons/blog_post_home_page/like.png'
import chatIcon from '../assets/gallery/icons/blog_post_home_page/Chat.png'
import ShareNetwork from '../assets/gallery/icons/blog_post_home_page/ShareNetwork.png'

const BlogPostHomePage = () => {
    return (
        <div className={style.container}>
            <h3>Blog Post</h3>
            <h2>
                <span>Latest </span>
                News & Blog
            </h2>
            <div className={style.post}>
                <div className={style.card}>
                    <img className={style.main_photo} src={firstDish} alt="pizza" />
                    <div className={style.contant}>
                        <p className={style.date}>10 February 2022 </p>
                        <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className={style.interface}>
                            <Link className={style.link}>Learn More</Link>
                            <div className={style.btn_img}>
                                <img src={likeIcon} alt="Like" />
                                <img src={chatIcon} alt="Chat" />
                                <img src={ShareNetwork} alt="Share Network" />
                            </div>
                        </div>
                    </div>
                </div >
                <div className={style.card}>
                    <img className={style.main_photo} src={secondDish} alt="tacos" />
                    <div className={style.contant}>
                        <p className={style.date}>10 February 2022 </p>
                        <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className={style.interface}>
                            <Link className={style.link}>Learn More</Link>
                            <div className={style.btn_img}>
                                <img src={likeIcon} alt="Like" />
                                <img src={chatIcon} alt="Chat" />
                                <img src={ShareNetwork} alt="Share Network" />
                            </div>
                        </div>
                    </div>
                </div >
                <div className={style.card}>
                    <img className={style.main_photo} src={thirdDish} alt="burger" />
                    <div className={style.contant}>
                        <p className={style.date}>10 February 2022 </p>
                        <p>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className={style.interface}>
                            <Link className={style.link}>Learn More</Link>
                            <div className={style.btn_img}>
                                <img src={likeIcon} alt="Like" />
                                <img src={chatIcon} alt="Chat" />
                                <img src={ShareNetwork} alt="Share Network" />
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default BlogPostHomePage;
