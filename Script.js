const mainDiv = document.getElementById("main_container");

const burgers = [
    {
        name:"Classic Burger",
        price:10.99,
        imgsrc:"burgerImgs/burger.jpg",
        resturant:"Bubbas",
        resturantLink:"https://www.bubbas33.com",
        pros: ["yum","yumm", "yummm"],
        cons: ["ew", "eww", "ewww"],
        rating: 7,
        notes: "hellos"
    },
    {
        name:"Fire Burger",
        price:13.99,
        imgsrc:"burgerImgs/alsoBurger.png",
        resturant:"The Chefs table",
        resturantLink:"https://www.bubbas33.com",
        pros: ["yum1","yumm2", "yummm3"],
        cons: ["ew1", "eww2", "ewww3"],
        rating: 100,
        notes: "hellos"
    }
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

                    <p class="burger_description">Rating: ${burger.rating}/10</p>
                </div>
                
            </div>
    `;

    mainDiv.innerHTML += burgerHTML
});