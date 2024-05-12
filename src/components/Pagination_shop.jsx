import React, { useEffect, useState } from 'react';
import fetchData from '../utils/get_chop_data'
import { Pagination } from '@mui/material';
import style from '../styles/pagination_shop.module.css'
import cart from '../assets/gallery/icons/header_icons/Tote.png'
import { useCart } from '../utils/context';

const PaginationShop = ({ dishes }) => {
    console.log(dishes);
    const [dish, setDish] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [countElement] = useState(15)
    const lastDishIndex = currentPage * countElement
    const firstDishIndex = lastDishIndex - countElement
    const currentDish = dishes.slice(firstDishIndex, lastDishIndex)
    const countPoint = Math.ceil(dishes.length / countElement)

    const { addToCart } = useCart()
    const handleAddToCart = (product) => {
        addToCart(product);
        console.log(product);
      };

    // useEffect(() => {
    //     const responseData = async () => {
    //         try {
    //             const response = await fetchData()
    //             setDish(response)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     responseData()
    // }, [])
    return (
        <div className={style.shop_container}>
            <div className={style.main}>
                <div className={style.shop_list}>
                    {currentDish.map((dish) => {
                        return (
                            <div className={style.shop_list_item}>
                                <img className={style.dish_image} src={dish.image} alt="" />
                                <div className={style.description}>
                                    <div className={style.title_price}>
                                        <h2>{dish.title}</h2>
                                        <p className={style.price}>${dish.price}</p>
                                    </div>
                                    <img src={cart} alt="" className={style.cart_btn_img} onClick={()=>handleAddToCart(dish)}/>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Pagination style={{ display: "flex", alignItems: "center", justifyContent: "center" }} color='warning' size="large" variant="outlined" shape="rounded" count={countPoint} page={currentPage} siblingCount={4} onChange={(_, num) => setCurrentPage(num)} />
            </div>
        </div>
    );
}

export default PaginationShop;
