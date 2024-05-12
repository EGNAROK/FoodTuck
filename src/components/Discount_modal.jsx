import React, { useEffect, useState } from 'react';
import style from '../styles/discount_modal.module.css'
import { useCart } from '../utils/context';
import closeIcon from '../assets/gallery/icons/cart_module_icons/icons8-close-30.png'

const DiscountModal = () => {
    const { discountModalOpen, openDiscountModal, closeDiscountModal } = useCart()
    const [openedOnce, setOpenedOnce] = useState(false)
    useEffect(() => {
        if (!openedOnce) {
            setTimeout(() => {
                openDiscountModal()
                setOpenedOnce(true)
            }, 4000)


        }
    }, [openedOnce, openDiscountModal])

    return (
        <div>
            {discountModalOpen && (
                <div className={style.background}>
                    <div id="card" class={style.card}>
                        <div class={style.content}>
                            <div class={style.card_body}>
                                <div class={`${style.code_container} ${style.float_animation}`}>
                                <div className={style.close_btn}><img src={closeIcon} alt="" onClick={closeDiscountModal} />
                        </div>  
                                    <span class={style.line}><span class={style.code_comment}>Discount on your first order</span></span>                                    
                                    <span class={`${style.line} ${style.indent}`}><span class={style.code_built_in}></span><span class={style.code_method}></span><span class={style.code_variable}>Foodtuck2023</span></span>
                                    <span class={style.line}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={style.discount_container}>
                        <div className={style.close_btn}><img src={closeIcon} alt="" onClick={closeDiscountModal} />
                        </div>                        
                        <div className={style.description}>
                            <p>Discount on your first order:</p>
                            <span>FudTuck2023</span>
                        </div>
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default DiscountModal;
