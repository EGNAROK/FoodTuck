import React, { useEffect, useState } from 'react';
import style from '../styles/our_menu_component.module.css'
import fetchData from '../utils/get_chop_data'
import { useCart } from '../utils/context';
import mainImg from '../assets/gallery/images/home_page_images/our_menu_component_main_img.jpg'
import addToCartIcon from '../assets/gallery/icons/header_icons/Tote.png'
import get_shop_data from '../utils/get_shop_data'

const OurMenu = (props) => {
  console.log(props);
  const { addToCart } = useCart()
  const [dish, setDish] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('burger');

  useEffect(() => {
    setDish(get_shop_data)
    // КОД ДЛЯ ОТРМАННЯ ДАНИХ ЧЕРЕЗ ЗАПИТ
    // const responseData = async () => {
    //   try {
    //     const response = await fetchData()
    //     setDish(response)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
    // responseData()
    //
  }, [])

  const currentDish = dish

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={style.our_menu}>
      <h3>Choose & pick</h3>
      <h2 style={{ color: props.textStyle.color }}><span>From</span> Our Menu</h2>
      <ul className={style.menu_list}>
        <li  style={{color: selectedCategory === 'burger' ? '#FF9F0D' : props.textStyle.color}} onClick={() => handleCategoryChange('burger')}>
          Burger
        </li>
        <li style={{color: selectedCategory === 'drink' ? '#FF9F0D' : props.textStyle.color}} onClick={() => handleCategoryChange('drink')}>
          Drink
        </li>
        <li style={{color: selectedCategory === 'pizza' ? '#FF9F0D' : props.textStyle.color}} onClick={() => handleCategoryChange('pizza')}>
          Pizza
        </li>
        <li style={{color: selectedCategory === 'sendwiches' ? '#FF9F0D' : props.textStyle.color}} onClick={() => handleCategoryChange('sendwiches')}>
          Sandwiches
        </li>
      </ul>
      <div className={style.dishes_card}>
        <img className={style.main_image} src={mainImg} alt="" />
        <div className={style.dish_cards}>
          {currentDish.filter((item) => item.type === selectedCategory).map((item) => {
            return (
              <div key={item.id} className={style.card}>
                <img src={item.image} alt={item.title} />
                <div className={style.dish_description}>
                  <h4 style={{ color: props.textStyle.color }}>{item.title}</h4>
                  <p className={style.short_description} style={{ color: props.textStyle.color }}>Lorem ipsum, dolor amet consectetur.</p>
                  <div className={style.price_and_btn}>
                    <p className={style.price}>${item.price}</p>
                    <div className={style.add_btn}>
                      <img onClick={() => addToCart(item)} src={addToCartIcon} alt="add to cart" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );

}

export default OurMenu;
