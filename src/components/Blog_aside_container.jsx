import React from 'react';
import style from '../styles/blog_aside_container.module.css'
import { Link } from 'react-router-dom';
import searchIcon from '../assets/gallery/icons/blog_post_home_page/MagnifyingGlass.png'
import userReview from '../assets/gallery/images/blog_post_home_page/userReview.png'
import stars from '../assets/gallery/icons/blog_post_home_page/stars.png'
import facebook from '../assets/gallery/icons/blog_post_home_page/facebook.png'
import twitter from '../assets/gallery/icons/blog_post_home_page/twitter.png'
import instagram from '../assets/gallery/icons/blog_post_home_page/instagram.png'
import pinterest from '../assets/gallery/icons/blog_post_home_page/pinterest.png'
import youtube from '../assets/gallery/icons/blog_post_home_page/youtube.png'
import resentPostFirst from '../assets/gallery/images/blog_post_home_page/recent_post_1.png'
import resentPostSecond from '../assets/gallery/images/blog_post_home_page/recent_post_2.png'
import resentPostThird from '../assets/gallery/images/blog_post_home_page/recent_post_3.png'
import resentPostFourth from '../assets/gallery/images/blog_post_home_page/recent_post_4.png'
import filteredByMenuFirst from '../assets/gallery/images/blog_post_home_page/filter_by_menu_1.png'
import filteredByMenuSecond from '../assets/gallery/images/blog_post_home_page/filter_by_menu_2.png'
import filteredByMenuThird from '../assets/gallery/images/blog_post_home_page/filter_by_menu_3.png'
import filteredByMenuFourth from '../assets/gallery/images/blog_post_home_page/filter_by_menu_4.png'
import filteredByMenuFifth from '../assets/gallery/images/blog_post_home_page/filter_by_menu_5.png'
import photoGalleryFirst from '../assets/gallery/images/blog_post_home_page/photo_gal_1.png'
import photoGallerySecond from '../assets/gallery/images/blog_post_home_page/photo_gal_2.png'
import photoGalleryThird from '../assets/gallery/images/blog_post_home_page/photo_gal_3.png'
import photoGalleryFourth from '../assets/gallery/images/blog_post_home_page/photo_gal_4.png'
import photoGalleryFifth from '../assets/gallery/images/blog_post_home_page/photo_gal_5.png'
import photoGallerySixth from '../assets/gallery/images/blog_post_home_page/photo_gal_6.png'

const BlogAsideContainer = () => {
    return (
        <div className={style.aside_blog_container}>
            <label>
                <input type="text" placeholder='Search Your Keword..' />
                <img src={searchIcon} alt="search icon" />
            </label>
            <div className={style.short_review}>
                <img className={style.user_photo} src={userReview} alt="user" />
                <h4>Prince Miyako</h4>
                <h5>Blogger/Photographer</h5>
                <div className={style.review_point}>
                    <img src={stars} alt="review point" />
                    <p>(1 Review)</p>
                </div>
                <p className={style.review_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque</p>
                <div className={style.social}>
                    <Link>
                        <img src={facebook} alt="facebook" />
                    </Link>
                    <Link>
                        <img src={twitter} alt="twitter" />
                    </Link>
                    <Link>
                        <img src={instagram} alt="instagram" />
                    </Link>
                    <Link>
                        <img src={pinterest} alt="pinterest" />
                    </Link>
                </div>
            </div>
            <div className={style.recent_post}>
                <h3>Recent Post</h3>
                <div className={style.links_container}>
                    <Link className={style.link}>
                        <img src={resentPostFirst} alt="burger" />
                        <div>
                            <p className={style.date} >June 22, 2020</p>
                            <p>Lorem ipsum dolor sit cing elit, sed do.</p>
                        </div>
                    </Link>
                    <Link className={style.link}>
                        <img src={resentPostSecond} alt="fish" />
                        <div>
                            <p className={style.date} >June 22, 2020</p>
                            <p>Lorem ipsum dolor sit cing elit, sed do.</p>
                        </div>
                    </Link>
                    <Link className={style.link}>
                        <img src={resentPostThird} alt="dish" />
                        <div>
                            <p className={style.date} >June 22, 2020</p>
                            <p>Lorem ipsum dolor sit cing elit, sed do.</p>
                        </div>
                    </Link>
                    <Link className={style.link}>
                        <img src={resentPostFourth} alt="desert" />
                        <div>
                            <p className={style.date} >June 22, 2020</p>
                            <p>Lorem ipsum dolor sit cing elit, sed do.</p>
                        </div>
                    </Link>                    
                </div>
            </div>
            <div className={style.filter_by_menu}>
            <h3>Filter By Menu</h3>
                <div>
                    <Link className={style.link} >
                        <img src={filteredByMenuFirst} alt="Chicken Fry" />
                        <div className={style.description}>
                            <p>Chicken Fry</p>
                            <p className={style.pages}>26</p>
                        </div>
                    </Link>
                    <Link className={style.link} >
                        <img src={filteredByMenuSecond} alt="Burger" />
                        <div className={style.description}>
                            <p>Burger Food</p>
                            <p className={style.pages}>46</p>
                        </div>
                    </Link>
                    <Link className={style.link} >
                        <img src={filteredByMenuThird} alt="Pizza" />
                        <div className={style.description}>
                            <p>Pizza</p>
                            <p className={style.pages}>16</p>
                        </div>
                    </Link>
                    <Link className={style.link} >
                        <img src={filteredByMenuFourth} alt="Fresh Fruits" />
                        <div className={style.description}>
                            <p>Fresh Fruits</p>
                            <p className={style.pages}>36</p>
                        </div>
                    </Link>                    
                    <Link className={style.link} >
                        <img src={filteredByMenuFifth} alt="Vegetables" />
                        <div className={style.description}>
                            <p>Vegetables</p>
                            <p className={style.pages}>16</p>
                        </div>
                    </Link>                    
                </div>
            </div>
            <div className={style.populer_tags}>
                <h3>Populer Tags</h3>
                <ul>
                    <li>Sandwich</li>
                    <li>Tikka</li>
                    <li>Bbq</li>
                    <li>Restaurant</li>
                    <li>Chicken Sharma</li>
                    <li>Health</li>
                    <li>Fastfood</li>
                    <li>Food</li>
                    <li>Pizza</li>
                    <li>Burger</li>
                    <li>Chicken</li>
                </ul>
            </div>
            <div className={style.photo_gallery}>
                <h3>Photo Gallery</h3>
                <div className={style.gallery}>
                    <img src={photoGalleryFirst} alt="pizza" />
                    <img src={photoGallerySecond} alt="toast with egg" />
                    <img src={photoGalleryThird} alt="fish" />
                    <img src={photoGalleryFourth} alt="meat" />
                    <img src={photoGalleryFifth} alt="dish" />
                    <img src={photoGallerySixth} alt="desert" />
                </div>
            </div>
            <div className={style.folow_us}>
                <h3>Follow Us</h3>
                <div className={style.links}>
                    <Link className={style.link}>
                        <img src={twitter} alt="twitter" />
                    </Link>
                    <Link className={style.link}>
                        <img src={youtube} alt="youtube" />
                    </Link>
                    <Link className={style.link}>
                        <img src={pinterest} alt="pinterest" />
                    </Link>
                    <Link className={style.link}>
                        <img src={instagram} alt="instagram" />
                    </Link>
                    <Link className={style.link}>
                        <img src={facebook} alt="facebook" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogAsideContainer;
