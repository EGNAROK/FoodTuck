import React from 'react';
import style from '../styles/about_page_video.module.css'
import closeIcon from '../assets/gallery/icons/cart_module_icons/icons8-close-30.png'
import { useCart } from '../utils/context';
import myVideo from '../assets/video/video1.mp4'

const AboutPageVideo = () => {
    const { videoModalOpen, openVideoModal, closeVideoModal } = useCart()
    return (
        <div >
            {videoModalOpen && (
                <div className={style.background}>
                    <div className={style.comercial_video}>
                    <div className={style.close_btn}><img src={closeIcon} alt="" onClick={closeVideoModal}/></div>
                        <video autoPlay loop muted>
                            <source src={myVideo} />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutPageVideo;
