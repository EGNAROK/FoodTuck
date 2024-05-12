const get_food_data = [
    {
        id: 1,
        type: "burger",
        image: "https://img.freepik.com/premium-photo/fresh-tasty-cheeseburger_925062-843.jpg",
        title: "Chef Burger",
        price: 27.00
    },
    {
        id: 2,
        type: "drink",
        image: "https://www.barbizmag.com/wp-content/uploads/2019/10/AutumnBloodOrangeBitter-300x250.jpg",
        title: "Orange Bitter",
        price: 16.00
    },
    {
        id: 3,
        type: "pizza",
        image: "https://padariabandeirantes4.com.br/yl/wp-content/uploads/2015/09/pizza1-300x250.jpg",
        title: "Sicilian Pizza",
        price: 47.00
    },
    {
        id: 4,
        type: "burger",
        image: "https://i.pinimg.com/474x/7a/16/c3/7a16c3c994e5b20c710035bad4ff3d51.jpg",
        title: "King Burger",
        price: 29.00
    },
    {
        id: 5,
        type: "sendwiches",
        image: "https://www.patisseriepalanque.com/storage/images/image?remote=https%3A%2F%2Fwww.patisseriepalanque.com%2FWebRoot%2FLaPoste%2FShops%2Fbox55567-200420%2F5E9E%2FC8F4%2FCA19%2FAFA3%2FD5FC%2F0A0C%2F05BC%2F0CC9%2Fsandwich_indien_.jpg&shop=box55567-200420&width=600&height=2560",
        title: "Fiesta Sandwich",
        price: 18.00
    },
    {
        id: 6,
        type: "burger",
        image: "https://www.rotellasbakery.com/wp-content/uploads/2015/03/turkeyWheatCiabatta.jpg",
        title: "Country Burger",
        price: 22.00
    },
    {
        id: 7,
        type: "pizza",
        image: "https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-140880000000000000/menu/items/1/item-500000030011286541_1690240489.png?size=medium",
        title: "Meat Pizza",
        price: 53.00
    },
    {
        id: 8,
        type: "drink",
        image: "https://lh3.googleusercontent.com/2G3-xGVDC2YEUeQCpNOjd0ZQhAZOOF6Ys5oBsM9PbpPTr5SCzZpt8kteKUc5GGbMBV1gmDSgwfVduwTTzoqNNA=w1280-h960-c-rj-v1-e365",
        title: "Bermuda Rum Swizzle",
        price: 12.00
    },
    {
        id: 9,
        type: "burger",
        image: "https://img.freepik.com/premium-photo/burger-with-bun-lettuce-it_873925-20286.jpg",
        title: "Chezzy Burger ",
        price: 26.00
    },
    {
        id: 10,
        type: "burger",
        image: "https://newportrestaurant.com/wp-content/uploads/2021/01/burger.png",
        title: "Monster Burger",
        price: 37.00
    },
    {
        id: 11,
        type: "sendwiches",
        image: "https://media.istockphoto.com/id/474291134/photo/salami-sandwich-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=zEwiamYRY9-vJlbMCzkp6GA8tvSg093ECr2UvWFj_k0=",
        title: "Classic Sandwich",
        price: 17.00
    },
    {
        id: 12,
        type: "pizza",
        image: "https://www.inpuntadiforchetta.com/wp-content/uploads/2020/04/pizzaOK.jpg",
        title: "Cheese Pizza",
        price: 31.00
    },
    {
        id: 13,
        type: "pizza",
        image: "https://media.istockphoto.com/id/104271813/photo/pizza.jpg?s=612x612&w=0&k=20&c=9f29pZNkca0urfJUuiVSMAjUDUL9em543cgYmEpFu2U=",
        title: "Veggie Pizza",
        price: 27.00
    },
    {
        id: 14,
        type: "burger",
        image: "https://www.rotellasbakery.com/wp-content/uploads/2015/03/marinatedBarChicken.jpg",
        title: "Chicken Burger",
        price: 21.00
    },
    {
        id: 15,
        type: "drink",
        image: "https://bevvyco.s3.amazonaws.com/img/drinks/ry/zxry/original-blue-hawaiian-d4666864e3622b7501cddbbfbf03c361-lg.jpg",
        title: "Original Blue Hawaii",
        price: 26.00
    },
    {
        id: 16,
        type: "drink",
        image: "https://cdn.diffords.com/contrib/stock-images/2018/05/5af30c769056f.jpg",
        title: "Mountain Man",
        price: 14.00
    },
    {
        id: 17,
        type: "sendwiches",
        image: "https://media.istockphoto.com/id/171586893/photo/foot-long-turkey-club-submarine-sandwich.jpg?b=1&s=612x612&w=0&k=20&c=GCcPzwNa79ukJIn7fyrqZ-4uhj5DPT5T5x_ZrvmaS_w=",
        title: "California Sandwich",
        price: 21.00
    },
    {
        id: 18,
        type: "pizza",
        image: "https://img.freepik.com/photos-premium/pizza-fond-blanc-ultra-hd-haute-qualite_889056-8203.jpg?w=2000",
        title: "Margherita Pizza",
        price: 43.00
    },
    {
        id: 19,
        type: "burger",
        image: "https://img.freepik.com/photos-premium/hamburger-petit-pain-laitue_664601-6113.jpg",
        title: "Gourmet Meaty Burger",
        price: 21.00
    },
    {
        id: 20,
        type: "burger",
        image: "https://img.freepik.com/premium-photo/tasty-fresh-cheeseburger_251318-253.jpg?size=626&ext=jpg",
        title: "Fish Burger",
        price: 25.00
    },
    {
        id: 21,
        type: "drink",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F04%2F21%2Fwatermelon-mint-margarita-ck.jpg",
        title: "Watermelon Margarita",
        price: 27.00
    },
    {
        id: 22,
        type: "pizza",
        image: "https://img.freepik.com/free-photo/meat-chicken-mushrooms-pizza-isolated-white-background-top-view-photo-menu_639032-1880.jpg",
        title: "Mushroom Pizza",
        price: 43.00
    },
    {
        id: 23,
        type: "sendwiches",
        image: "https://img.freepik.com/premium-photo/sandwich-with-ham-tomato-cheese-onion-lettuce-isolated-white-backgroundxa_183587-974.jpg",
        title: "Italian Sandwich",
        price: 19.00
    },
    {
        id: 24,
        type: "drink",
        image: "https://cdn.diffords.com/contrib/stock-images/2018/05/5af30460e88d7.jpg",
        title: "French Dew Sour",
        price: 15.00
    },
    {
        id: 25,
        type: "sendwiches",
        image: "https://135912451.cdn6.editmysite.com/uploads/1/3/5/9/135912451/s682784161595785964_p38_i1_w1200.jpeg",
        title: "Gourmet Sandwiches",
        price: 22.00
    },
    {
        id: 26,
        type: "pizza",
        image: "https://img.freepik.com/premium-photo/pizza-with-cheese-meat-tomatoes-white_201606-903.jpg",
        title: "Perfection Pizza",
        price: 43.00
    },
    {
        id: 27,
        type: "sendwiches",
        image: "https://st3.depositphotos.com/2534661/12830/i/450/depositphotos_128307264-stock-photo-sandwich-with-ham-and-cheese.jpg",
        title: "Chicken Sandwich",
        price: 16.00
    },
    {
        id: 28,
        type: "drink",
        image: "https://cdn.diffords.com/contrib/stock-images/2018/05/5af30deb48add.jpg",
        title: "Oranjiniha",
        price: 19.00
    },
    {
        id: 29,
        type: "burger",
        image: "https://t3.ftcdn.net/jpg/00/80/51/52/360_F_80515239_smwGrRMF9b3DsZ523NH5sCx9UH29TNJB.jpg",
        title: "Prime Patty Burger",
        price: 25.00
    },
    {
        id: 30,
        type: "drink",
        image: "https://i.pinimg.com/736x/5b/3a/dd/5b3addb9af2b28d355bc49ebcf4a1d25.jpg",
        title: "Cranberry Martini",
        price: 22.00
    },
    {
        id: 31,
        type: "pizza",
        image: "https://media.istockphoto.com/id/96914754/photo/sliced-pizza-margarita.jpg?s=612x612&w=0&k=20&c=AOuRf5gZAwA8wWeLgcYZw6FiEuaW5K0Ysph-GMSNziA=",
        title: "Spinach Feta Pizza",
        price: 43.00
    },
    {
        id: 32,
        type: "drink",
        image: "https://cdn.diffords.com/contrib/stock-images/2018/05/5af309efbdd97.jpg",
        title: "London Scramble",
        price: 21.00
    },
    {
        id: 33,
        type: "pizza",
        image: "https://media.istockphoto.com/id/468634908/photo/pizza-with-eggs-and-meat-on-a-white-background-isolated.jpg?s=170667a&w=0&k=20&c=eNYacMblhB4Ck-cs-I5pRMwVrbcRssGFK8GUbZ3EIMk=",
        title: "Sunrise Bacon Pizza",
        price: 29.00
    },
]

export default get_food_data