import React, { useEffect, useState } from 'react';
import pageTitleArr from '../utils/page_banner';
import fetchData from '../utils/get_chop_data'
import Header from '../components/Header';
import TitlePageBanner from '../components/Title_page_banner';
import PaginationShop from '../components/Pagination_shop';
import Footer from '../components/Footer';
import style from '../styles/shopPage.module.css'
import searchIcon from '../assets/gallery/icons/shop_icons/MagnifyingGlass.png'
import { Slider } from '@mui/material';
import burgerVideo from '../assets/video/burger_2.mp4'
import get_shop_data from '../utils/get_shop_data'

const Shop = () => {
    const [{ ourShop }] = pageTitleArr
    console.log({ ourShop });
    const [dish, setDish] = useState([])
    const [categoryFilter, setCategoryFilter] = useState("all"); // Початкова категорія "all"
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const minPossiblePrice = Math.min(...dish.map((d) => Number(d.price)));
    const maxPossiblePrice = Math.max(...dish.map((d) => Number(d.price)));

    useEffect(() => {
        setDish(get_shop_data)
        // КОД ДЛЯ ОТРМАННЯ ДАНИХ ЧЕРЕЗ ЗАПИТ
        // const responseData = async () => {
        //     try {
        //         const response = await fetchData()
        //         setDish(response)
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }
        // responseData()
        //
    }, [])

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePriceChange = (_, newValue) => {
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
    };

    const filteredDishes = dish.filter((dish) => {
        const isCategoryMatch = categoryFilter === "all" || dish.type === categoryFilter;
        const isSearchMatch = dish.title.toLowerCase().includes(searchQuery.toLowerCase());
        const isPriceMatch = (minPrice === "" || Number(dish.price) >= minPrice) &&
            (maxPrice === "" || Number(dish.price) <= maxPrice);

        return isCategoryMatch && isSearchMatch && isPriceMatch;
    });

    return (
        <div className={style.shop_page}>
            <Header />
            <TitlePageBanner pageTitle={ourShop} />
            <div className={style.main_shop_container}>
                <div>
                    <PaginationShop dishes={filteredDishes} />
                </div>
                <div className={style.aside_bar_navigation}>
                    <div>
                        <label className={style.search_dishes}>
                            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder='Search Product' />
                            <img src={searchIcon} alt="search icon" />
                        </label>
                    </div>
                    <div className={style.food_category}>
                        <h5>Category</h5>
                        <label>
                            <input
                                type="checkbox"
                                value="burger"
                                checked={categoryFilter.includes("burger")}
                                onChange={handleCategoryChange}
                            />
                            Burger
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="drink"
                                checked={categoryFilter.includes("drink")}
                                onChange={handleCategoryChange}
                            />
                            Drink
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="pizza"
                                checked={categoryFilter.includes("pizza")}
                                onChange={handleCategoryChange}
                            />
                            Pizza
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="sendwiches"
                                checked={categoryFilter.includes("sendwiches")}
                                onChange={handleCategoryChange}
                            />
                            Sandwiches
                        </label>
                    </div>
                    <div className={style.video}>
                        <video autoPlay loop muted>
                                <source src={burgerVideo} />
                        </video>
                    </div>
                    <div className={style.price_filter}>
                        <label>
                            <h5>Filter By Price</h5>
                            <Slider
                                value={[minPrice, maxPrice]}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={minPossiblePrice}
                                max={maxPossiblePrice}
                                sx={{
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#FF9F0D", // Змініть колір палзунка (крапочок) тут
                                    },
                                    "& .MuiSlider-rail": {
                                        backgroundColor: "#FF9F0D", // Змініть колір прямої тут
                                    },
                                    "& .MuiSlider-track": {
                                        backgroundColor: "#FF9F0D", // Змініть колір прямої тут
                                    },
                                }}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shop;
