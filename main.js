"use strict";

//Create new object
//list of functions in alphabetical order
function createNewFlower(name, price, color, season){
    let flower = {
        name: name,
        price: price, 
        color: color, 
        season: season,
    };
    return flower;
}

//Adds a new flower to the webbside 
function addFlowerToWebbside(webbside, flower){
    webbside.push(flower);
}

//functions starting with G
function getFlowersByPrice(flowers, price){
    let flowersByPrice = [];

    for(let flower of flowers){
        if(flower.price.toLowerCase() == price.toLowerCase()){
            flowersByPrice.push(flower);
        }
    }  
    return flowersByPrice;    
}


function getFlowersByColor(flowers, color){
    let flowersByColor = [];

    for(let flower of flowers){
        if(flower.color == color){
            flowersByColor.push(flower);
        }
    }  
    return flowersByColor;    
}
 

function getFlowersBySeason(flowers, season){
    let flowersBySeason = [];

    for(let flower of flowers){
        if(flower.season.toLowerCase() == season.toLowerCase()){
            flowersBySeason.push(flower);
        }
    }  
    return flowersBySeason;    
}


//functions starting with G ends here 


// Create flower object into HTML
function createFlower (flower) {
    let div = document.createElement("div");
    div.classList.add("flower");
    div.id = flower.id;

    div.innerHTML = `
        <div>${flower.name}</div>
        <div>${flower.price}</div>
        <div>${flower.color}</div>
        <div>${flower.season}</div>
        <button type="button">Remove</button>

    `;
    return div;
   
}

