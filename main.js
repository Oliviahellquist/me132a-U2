"use strict";

// functions in alphabetical order


// Creates a flower
function createNewFlower(name, price, color, season) {
    let flower = {
        name: name,
        price: price,
        color: color,
        season: season,
    };

    return flower;
}

// Adds a flower
function addFlowerToDatabase(database, flower) {
    database.push(flower);
}

function removeFlowerById(flowers, id) {
    for (let i = 0; i < flowers.length; i++) {
        let flower = flowers[i];
        if (flower.id == id) {
            flowers.splice(i, 1);
            return;
        }
    }
}

function getFlowersByColor(flowers, color) {
    let flowersByColor = [];

    for (let flower of flowers) {
        if (flower.color.toLowerCase() == color.toLowerCase()) {
            flowersByColor.push(flower);
        }
    }

    return flowersByColor;
}

function getFlowersBySeason(flowers, season) {
    let flowersBySeason = [];

    for (let flower of flowers) {
        if (flower.season.toLowerCase() == season.toLowerCase()) {
            flowersBySeason.push(flower);
        }
    }

    return flowersBySeason;
}

function getFlowersByPrice(flowers, price) {
    let flowersByPrice = [];

    for (let flower of flowers) {
        if (flower.price == price) {
            flowersByPrice.push(flower);
        }
    }

    return flowersByPrice;
}

function getAverageFlowerPrice(flowers) {
    let sumOfPrice = 0;

    for (let flower of flowers) {
        sumOfPrice = sumOfPrice + flower.price;
    }

    return Math.round(sumOfPrice / flowers.length);
}

function renderFlower(flower) {
    let div = document.createElement("div");
    div.classList.add("flower");
    div.id = flower.id;

    div.innerHTML = `
        <li>${flower.name}</li>
        <div>${flower.price}</div>
        <div>${flower.color}</div>
        <div>${flower.season}</div>
        <button type="button">Remove</button>
    `;

    return div;
}

function renderFlowers(flowers) {
    let flowersElement = document.getElementById("flowers");
    flowersElement.innerHTML = "";

    for (let flower of flowers) {
        let flowerElement = renderFlower(flower);
        flowersElement.appendChild(flowerElement);
    }

    setRemoveFlowerHandlers();
}


function onAddFlowerSubmit(event) {
   
    event.preventDefault();

    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let color = document.getElementById("color").value;
    let season = document.getElementById("season").value;

// Added alerts to the function
    if(name == ""){
        return alert("Fill in all the information please.");
    }
    else if(price == ""){
        return alert("Fill in all the information please.");
    }
    else if(color == ""){
        return alert("Fill in all the information please.");
    }
    else if(season == ""){
        return alert("Fill in all the information please.");
    }

    let flower = createNewFlower(name, price, color, season);
    flower.id = database[database.length - 1].id + 1;

    addFlowerToDatabase(database, flower)
    renderFlowers(database);
    let form = document.getElementById("add-flower-form");
    form.reset();
}


function setAddFlowerHandler() {
    let form = document.getElementById("add-flower-form");
    form.addEventListener("submit", onAddFlowerSubmit);
}


function onRemoveFlowerClick(event) {
    let button = event.target;
    let id = button.parentElement.id;
    removeFlowerById(database, id);
    renderFlowers(database);
}


function setRemoveFlowerHandlers() {
    let buttons = document.querySelectorAll(".flower button");

    for (let button of buttons) {
        button.addEventListener("click", onRemoveFlowerClick);
    }
}

function onFilterByColorSubmit(event) {
    event.preventDefault();
    let color = document.getElementById("filter-color").value;
    let flowers = getFlowersByColor(database, color);
    renderFlowers(flowers);
}

function onFilterBySeasonSubmit(event) {
    event.preventDefault();
    let season = document.getElementById("filter-season").value;
    let flowers = getFlowersBySeason(database, season);
    renderFlowers(flowers);
}


function onFilterByPriceSubmit(event) {
    event.preventDefault();
    let price = document.getElementById("filter-price").value;
    let flowers = getFlowersByPrice(database, price);
    renderFlowers(flowers);
}

function onShowAllClick() {
    document.getElementById("filter-color").value = "";
    document.getElementById("filter-season").value = "";
    document.getElementById("filter-price").value = "";
    renderFlowers(database);
}

function setFilterFlowerHandlers() {
    let colorForm = document.getElementById("filter-by-color");
    let priceForm = document.getElementById("filter-by-price");
    let seasonForm = document.getElementById("filter-by-season");
    let showAll = document.getElementById("show-all");

    colorForm.addEventListener("submit", onFilterByColorSubmit);
    priceForm.addEventListener("submit", onFilterByPriceSubmit);
    seasonForm.addEventListener("submit", onFilterBySeasonSubmit);
    showAll.addEventListener("click", onShowAllClick);
}

// Direct code
renderFlowers(database);
setAddFlowerHandler();
setFilterFlowerHandlers();


