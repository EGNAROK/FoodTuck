import React from 'react';
import { useState } from 'react';
import style from '../styles/payment_form.module.css'
import { useCart } from '../utils/context';
import closeIcon from '../assets/gallery/icons/cart_module_icons/icons8-close-30.png'

const PaymentForm = () => {
    const { paymentModalOpen, openPaymentModal, closePaymentModal } = useCart()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cash',
        cardNumber: '',
        cardExpiration: '',
        cardCVV: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <div>
            {paymentModalOpen && (
                <div className={style.background}>
                    <div className={style.container}>
                        <h1 className={style.heading}><span>Payment</span> Form</h1>
                        <div className={style.close_btn}><img src={closeIcon} alt="" onClick={closePaymentModal} /></div>
                        <form className={style.form}>
                            <div className={style.form_group}>
                                <label htmlFor="name" className={style.form_label}>Name:</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={style.form_input} placeholder="Your name" />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="phone" className={style.form_label}>Phone:</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={style.form_input} placeholder="Your phone number" />
                            </div>
                            <div className={style.form_group}>
                                <label htmlFor="address" className={style.form_label}>Address:</label>
                                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className={style.form_input} placeholder="Your delivery address" />
                            </div>
                            <div className={style.form_group} >
                                <label htmlFor="paymentMethod" className={style.form_label}>Payment Method:</label>
                                <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} className={style.form_input} style={{cursor:"pointer"}}>
                                    <option value="cash">Cash</option>
                                    <option value="card">Card</option>
                                </select>
                            </div>
                            {formData.paymentMethod === 'card' && (
                                <div className={style.card_details}>
                                    <div className={style.form_group}>
                                        <label htmlFor="cardNumber" className={style.form_label}>Card Number:</label>
                                        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className={style.form_input} placeholder="Your card number" />
                                    </div>
                                    <div className={style.form_label}>
                                        <label htmlFor="cardExpiration" className={style.form_label}>Card Expiration (MM/YY):</label>
                                        <input type="text" id="cardExpiration" name="cardExpiration" value={formData.cardExpiration} onChange={handleInputChange} className={style.form_input} placeholder="(MM/YY)" />
                                    </div>
                                    <div className={style.form_group}>
                                        <label htmlFor="cardCVV" className={style.form_label}>CVV Code:</label>
                                        <input type="text" id="cardCVV" name="cardCVV" value={formData.cardCVV} onChange={handleInputChange} className={style.form_input} placeholder="CVV-код" />
                                    </div>
                                </div>
                            )}
                            
                            <button className={style.ui_btn}>Order</button>
                            {/* <button type="submit" className={style.form_button}>Order</button> */}
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
}

export default PaymentForm;
