import React, { useEffect, useState } from 'react';
import style from '../styles/header.module.css'
import firstIcon from '../assets/gallery/icons/header_icons/MagnifyingGlass.png'
import secondIcon from '../assets/gallery/icons/header_icons/User.png'
import thirdIcon from '../assets/gallery/icons/header_icons/Tote.png'
import Navigation from './Navigation';
import { useCart } from '../utils/context';

const Header = () => {
    const { cartItems, openCartModal, openSingInModal, totalCount } = useCart()
    const [isCartEmpty, setIsCartEmpty] = useState(false);
    const [total_count, setTotalCount] = useState(0);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const chackCountIcon = () => {
        return cartItems.length > 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
    }

    useEffect(() => {
        chackCountIcon()
        setTotalCount(totalCount)
    }, [cartItems])

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className={style.header}>
            <div className={style.header_container}>
                <div>
                    <h2 className={style.logo}>
                        <span>Food </span>
                        tuck
                    </h2>
                </div>
                <div className={style.burger_menu}>
                    <input className={style.header_checkbox} type="checkbox" id="checkbox" onClick={toggleBurgerMenu} />
                    <label htmlFor="checkbox" className={style.toggle}>
                        <div className={`${style.bars} ${style.bar1}`} id="bar1"></div>
                        <div className={`${style.bars} ${style.bar2}`} id="bar2"></div>
                        <div className={`${style.bars} ${style.bar3}`} id="bar3"></div>
                    </label>
                </div>

                <Navigation isOpen={isBurgerMenuOpen} />
                <ul className={style.nav_header_buttons}>
                    {isCartEmpty && (
                        <div className={style.count}>
                            {total_count}
                        </div>
                    )}
                    <li>
                        <img src={secondIcon} alt="User icon" onClick={() => openSingInModal()} />
                    </li>
                    <li>
                        <img src={thirdIcon} alt="Cart icon" onClick={() => openCartModal()} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
