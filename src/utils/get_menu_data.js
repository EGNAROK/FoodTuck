import firstObjectDish from "../assets/gallery/images/menu_images/menu_data_obj_1.png";
import secondObjectDish from "../assets/gallery/images/menu_images/menu_data_obj_2.png";
import thirdObjectDish from "../assets/gallery/images/menu_images/menu_data_obj_3.png";
import fourthObjectDish from "../assets/gallery/images/menu_images/menu_data_obj_4.png";
import icon from "../assets/gallery/icons/menu_icons/menu_data_icon_coffee.png";

const menuData = [
    {
        firstObject: {
            firstDishes: {
                image: firstObjectDish,
                title: "Starter Menu",
                icon: icon,
                dishes: {
                    firstDish: {
                        title: "Alder Grilled Chinook Salmon",
                        description: "Toasted French bread topped with romano, cheddar",
                        calories: "560 CAL",
                        price: "32$",
                    },
                    secondDish: {
                        title: "Berries and creme tart",
                        description: "Gorgonzola, ricotta, mozzarella, taleggio",
                        calories: "700 CAL",
                        price: "43$",
                    },
                    thirdDish: {
                        title: "Tormentoso Bush Pizza Pintoage",
                        description: "Ground cumin, avocados, peeled and cubed",
                        calories: "1000 CAL",
                        price: "14$",
                    },
                    fourthDish: {
                        title: "Spicy Vegan Potato Curry",
                        description: "Spreadable cream cheese, crumbled blue cheese",
                        calories: "560 CAL",
                        price: "35$",
                    },
                },
            },
            secondDishes: {
                image: secondObjectDish,
                title: "Main Course",
                icon: icon,
                dishes: {
                    firstDish: {
                        title: "Optic Big Breakfast Combo Menu",
                        description: "Toasted French bread topped with romano, cheddar",
                        calories: "560 CAL",
                        price: "32$",
                    },
                    secondDish: {
                        title: "Cashew Chicken With Stir-Fry",
                        description: "Gorgonzola, ricotta, mozzarella, taleggio",
                        calories: "700 CAL",
                        price: "43$",
                    },
                    thirdDish: {
                        title: " Vegetables & Green Salad",
                        description: "Ground cumin, avocados, peeled and cubed",
                        calories: "1000 CAL",
                        price: "14$",
                    },
                    fourthDish: {
                        title: "Spicy Vegan Potato Curry",
                        description: "Spreadable cream cheese, crumbled blue cheese",
                        calories: "560 CAL",
                        price: "35$",
                    },
                },
            }
        },
        secondObject: {
            firstDishes: {
                image: thirdObjectDish,
                title: "Dessert",
                icon: icon,
                dishes: {
                    firstDish: {
                        title: "Fig and lemon cake",
                        description: "Toasted French bread topped with romano, cheddar",
                        calories: "560 CAL",
                        price: "32$",
                    },
                    secondDish: {
                        title: "Creamy mascarpone cake",
                        description: "Gorgonzola, ricotta, mozzarella, taleggio",
                        calories: "700 CAL",
                        price: "43$",
                    },
                    thirdDish: {
                        title: "Pastry, blueberries, lemon juice",
                        description: "Ground cumin, avocados, peeled and cubed",
                        calories: "1000 CAL",
                        price: "14$",
                    },
                    fourthDish: {
                        title: "Pain au chocolat",
                        description: "Spreadable cream cheese, crumbled blue cheese",
                        calories: "560 CAL",
                        price: "35$",
                    },
                }
            },
            secondDishes: {
                image: fourthObjectDish,
                title: "Drinks",
                icon: icon,
                dishes: {
                    firstDish: {
                        title: "Caffè macchiato",
                        description: "Toasted French bread topped with romano, cheddar",
                        calories: "560 CAL",
                        price: "32$",
                    },
                    secondDish: {
                        title: "Aperol Spritz Capacianno",
                        description: "Gorgonzola, ricotta, mozzarella, taleggio",
                        calories: "700 CAL",
                        price: "43$",
                    },
                    thirdDish: {
                        title: "Caffe Latte Campuri",
                        description: "Ground cumin, avocados, peeled and cubed",
                        calories: "1000 CAL",
                        price: "14$",
                    },
                    fourthDish: {
                        title: "Tormentoso BushTea Pintoage",
                        description: "Spreadable cream cheese, crumbled blue cheese",
                        calories: "560 CAL",
                        price: "35$",
                    },
                },
            }
        }
    }
]

export default menuData