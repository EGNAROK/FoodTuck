import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import style from '../styles/carousel.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import firstReviewUser from '../assets/gallery/images/review_carousel/review_user_photo_1.png'
import secondReviewUser from '../assets/gallery/images/review_carousel/review_user_photo_2.jpg'
import thirdReviewUser from '../assets/gallery/images/review_carousel/review_user_photo_3.jpg'
import icon from '../assets/gallery/images/review_carousel/Quotes.png'
import stars from '../assets/gallery/images/review_carousel/star.png'

const Carousel = (props) => {
    return (
        <div className={style.review_section}>
            <h3>Testimonials</h3>
            <h2 style={{color:props.textStyle.color}}><span>What</span> our client are saying</h2>
            <div className={style.review_carousel}>
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}>
                    <SwiperSlide className={style.review_card} >
                        <div className={style.photo_user}>
                            <img src={firstReviewUser} alt="" />
                        </div>
                        <div className={style.review_user}>
                            <img src={icon} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                            <img src={stars} alt="" />
                            <h4>Alamin Hasan</h4>
                            <h5>Food Specialist</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.review_card}>
                    <div className={style.photo_user}>
                            <img src={secondReviewUser} alt="" />
                        </div>
                        <div className={style.review_user}>
                            <img src={icon} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                            <img src={stars} alt="" />
                            <h4>Salvador Dali</h4>
                            <h5>Surrealist Artist</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.review_card}>
                    <div className={style.photo_user}>
                            <img src={thirdReviewUser} alt="" />
                        </div>
                        <div className={style.review_user}>
                            <img src={icon} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                            <img src={stars} alt="" />
                            <h4>Albert Einstein</h4>
                            <h5>Theoretical Physicist</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;
