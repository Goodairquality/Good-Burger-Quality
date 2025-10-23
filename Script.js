const mainDiv = document.getElementById("main_container");

const burgers = [
    {
        name:"Classic Burger - Bubbas",
        price:13.49,
        imgsrc:"burgerImgs/bubbasclassic.webp",
        resturant:"Bubbas",
        resturantLink:"https://www.bubbas33.com",
        pros: ["- Burger was well seasoned","- Cheese was perfectly melted. Loved it", "- Fries were good"],
        cons: ["- Fries were seasoned a bit too much for me", "", ""],
        rating: 8.5,
        notes: "A Classic"
    },
    {
        name:"Classic Burger - Yardhouse",
        price:15.99,
        imgsrc:"burgerImgs/yardhouseclassic.webp",
        resturant:"Yard House",
        resturantLink:"https://www.yardhouse.com/locations/fl/orlando/orlando-icon-park/8352?cmpid=br:yh_ag:ie_ch:loc_ca:YHGMB_sn:gmb_gt:orlando-fl-8352_pl:locurl_rd:1049",
        pros: ["- Bun and cheese were DELICIOUS","- Priced well", "- Simple but seasoning and flavor make up for it"],
        cons: ["- Meat was slightly burnt on the edges", "", ""],
        rating: 9.2,
        notes: "I NEED to eat this again"
    },
    {
        name:"Bacon Cheeseburger - Bubbas",
        price:14.49,
        imgsrc:"burgerImgs/bubbasbaconcheese.webp",
        resturant:"Bubbas",
        resturantLink:"https://www.bubbas33.com",
        pros: ["- Cheese (on the burger) was good","- was good without bacon", ""],
        cons: ["- Cheese on fries was solid.", "- Bacon tasted funny", "- Side sauce was bland"],
        rating: 4.75,
        notes: "Least fav from bubbas"
    },
    {
        name:"??? - The Chefs table",
        price:29.99,
        imgsrc:"burgerImgs/thechefstable.webp",
        resturant:"The Chefs Table",
        resturantLink:"https://www.chefstablehouston.com",
        pros: ["- Cheese and bun was buttery!","- Well seasoned", "- Juicy patty"],
        cons: ["- horribly overpriced ", "- Wouldve liked more toppings", ""],
        rating: 8.5,
        notes: "This was fire icl"
    },
    // {
    //     name:"Wild Shroomin Burger - Bubbas",
    //     price:14.49,
    //     imgsrc:"burgerImgs/bubbasbaconcheese.webp",
    //     resturant:"Bubbas",
    //     resturantLink:"https://www.bubbas33.com",
    //     pros: ["- Cheese (on the burger) was good","- was good without bacon", ""],
    //     cons: ["- Cheese on fries was solid.", "- Bacon tasted funny", "- Side sauce was bland"],
    //     rating: 4.75,
    //     notes: "Least fav from bubbas"
    // }
]

burgers.forEach(burger => {
    const burgerHTML = `
        <div class="mainBurgerDisplay container">

                <div class="burgerImgContainer container">
                    <img src="${burger.imgsrc}" class="burgerImg">
                </div>

                <div class="burgerFeatures burger_image_container container">

                    <div class="burgerFeaturesBurgerNamePrice container">
                        <h3 class="burgerFeaturesBurgerName">${burger.name}</h3>
                        <div class="vl"></div>
                        <h3 class="burgerFeaturesBurgerPrice">$${burger.price}</h3>
                    </div>

                    <div class="burgerFeaturesBurgerLocation container">
                        <a class="locationLink" href="${burger.resturantLink}">${burger.resturant}</a>
                    </div>

                    <div class="burgerFeaturesProsCons container">

                        <div class="burgerProsDiv">

                            <h4>Pros</h4>

                            <ul class="burgerPros">
                                <li>${burger.pros[0]}</li>
                                <li>${burger.pros[1]}</li>
                                <li>${burger.pros[2]}</li>
                            </ul>

                        </div>

                        <div class="burgerConsDiv">

                            <h4>Cons</h4>

                            <ul class="burgerCons">
                                <li>${burger.cons[0]}</li>
                                <li>${burger.cons[1]}</li>
                                <li>${burger.cons[2]}</li>
                            </ul>

                        </div>

                    </div>

                    <p class="burger_description rating">Rating: ${burger.rating}/10 | ${burger.notes}</p>
                </div>
                
            </div>
    `;

    mainDiv.innerHTML += burgerHTML
});