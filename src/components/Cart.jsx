import React, { useEffect, useState } from 'react';
import style from '../styles/cart.module.css'
import removeIcon from '../assets/gallery/icons/cart_module_icons/X.png'
import plusIcon from '../assets/gallery/icons/cart_module_icons/Plus.png'
import minusIcon from '../assets/gallery/icons/cart_module_icons/Minus.png'
import closeIcon from '../assets/gallery/icons/cart_module_icons/icons8-close-30.png'
import { useCart } from '../utils/context';

const Cart = () => {
    const { cartItems, isCartModalOpen, closeCartModal, increaseCount, reduseCount, totalPrice, removeFromCart, openPaymentModal } = useCart()
    const [total_price, setTotalPrice] = useState(0)
    const [userInput, setUserInput] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    const discountWord = "Foodtuck2023"
    const discount = 15

    useEffect(() => {
        setTotalPrice(totalPrice)
    }, [cartItems])

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const checkDiscount = () => {
        if (!discountApplied) {
            if (userInput === discountWord) {
                alert("Discount applied!");
                setTotalPrice(total_price * (1 - (discount / 100)));
                setDiscountApplied(true); // Встановлюємо прапорець, що знижка застосована
            } else {
                alert(`Discount not applied! Please check the code for correctness: ${discountWord}`);
            }
        } else {
            alert("Discount has already been applied!");
        }
    };

    return (
        <div>
            {isCartModalOpen && (
                <div className={style.background}>
                    <div className={style.cart_module}>
                        <div className={style.cart_header}>
                            <h2>Shopping Cart</h2>
                            <img src={closeIcon} alt="" onClick={closeCartModal} />
                        </div>
                        <table className={style.cart_table}>
                            <thead>
                                <tr>
                                    <th className={style.image}>Product</th>
                                    <th className={style.price}>Price</th>
                                    <th className={style.count_box}>Quantity</th>
                                    <th className={style.total_price}>Total</th>
                                    <th className={style.remove}>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr>
                                        <td className={style.img_and_title}>
                                            <img src={item.image} alt="" />
                                            <p>{item.title}</p>
                                        </td>
                                        <td className={style.price}>$ {item.price}</td>
                                        <td className={style.count_box}>
                                            <div className={style.count_box_border}>
                                                <img src={minusIcon} alt="" onClick={() => reduseCount(item.id)} />
                                                <p className={style.count_item}>{item.count}</p>
                                                <img src={plusIcon} alt="" onClick={() => increaseCount(item.id)} />
                                            </div>
                                        </td>
                                        <td className={style.total_price}>$ {item.price * item.count}</td>
                                        <td className={style.remove_icon} onClick={() => removeFromCart(item.id)}>
                                            <img src={removeIcon} alt="remove icon" />
                                        </td>
                                    </tr>
                                ))}
                                <div className={style.total_bill}>
                                    <h3>Total Bill</h3>
                                    <div className={style.bill_box}>
                                        <div className={style.discount_container}>
                                            <input className={style.total_amount} type="text" value={userInput} onChange={handleInputChange} placeholder='Discount code'/>
                                            <button className={style.ui_btn} onClick={checkDiscount}>Discount</button>
                                        </div>
                                        <div className={style.amount_container}>
                                            <div className={style.total_amount}>
                                                <p>Total Amount</p>
                                                <p className={style.total_price}>$ {total_price.toFixed(2)}</p>
                                            </div>
                                            <p className={style.ui_btn} onClick={openPaymentModal}>Proceed to Checkout</p>
                                        </div>
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
