/*
this part most e connected to the API server in order to generate the responses: 
create a deck of cards, deal the cards, capture the inputs from the user in general 
but I don't know how to these thing yet.

I had a lot of troubles figuring out how to organize the app. I need at least a sequence of steps or 
criteria to guide me in this part of the development,

As result, I built something that may look like an app but there is just a mess of code inside.
*/

class Card {
    constructor(id, faceImage, owner) {
        this.id = id;
        this.faceImage = "";
        this.owner = "";
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.draw = "";
    }
}

class Game {
    constructor(mode) {
        this.mode = mode;
        this.level = level;
    }
}

// Unsplash API to collect the images for the game
//import { createApi } from 'unsplash-js';
//import * as nodeFetch from 'node-fetch'

let accessKeyStr = 'OsngyfLfJjoY56d3iErkWIs-fLtc0ETBQP5RIM63R3k'

const chooseMode = {
    kids: 20,
    adults: 50,
    Megamind: 100
}


let url = `https://api.unsplash.com/search/photos?client_id=${accessKeyStr}&page=${Math.ceil(chooseMode.kids/20)}&order_by=latest&content_filter=high&query=cats`    
console.log(Math.ceil(chooseMode.kids/20));
fetch(url)
.then(function(data) {
    return data.json();
})
.then(function(data) {
    //console.log(data)
    let newPhoto = {} 
    data.results.forEach(photo => {
        newPhoto.cardId = photo.id;
        newPhoto.link = photo.urls.small;
        newPhoto.description = photo.alt_description;
        newPhoto.owner = photo.user.name;
        newPhoto.ownerLink = photo.user.links.self
    });
    console.log(newPhoto);
})
        



document.getElementById('temp').addEventListener('click', createCardFaceDown)

function createCardFaceDown(){
    for(let i = 1; i <= 20; i++) {
        let divCardCanvas = document.createElement('div');
        divCardCanvas.setAttribute('class', 'card-canvas')
        let cardFaceDown = `
            <div class="card_faceDown">
                <div>
                    <img src="bulb.png" alt="Memory Card Game" height="100px;">
                    <p>Memory Card Game</p>
                </div>
            </div>`;
        divCardCanvas.innerHTML = cardFaceDown;
        document.getElementById('gamePad').appendChild(divCardCanvas);
    }
    
}

/*
function createCards(level){
    let divCardimages = [];
    for() {
        // fecth the images, only half the number of cards
    }

    for(let i = 1; i <= 5; i++) {
        // assign a random numbre, order and asign to the dom elements
        let divCardimages = document.createElement('div');
        divCardimages.setAttribute('class', 'card-canvas card_faceUp')

        let Cardsimages = `
                    <img src="${newPhoto.link}" alt="${newPhoto.description}" height="100px;">
                    <p>Photo by <a href="${newPhoto.ownerLink}">${newPhoto.owner}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral" target="blank">Unsplash</p>
                </div>
            </div>`;
        divCardimages.innerHTML = Cardsimages;
        document.getElementById('gamePad').appendChild(divCardimages);
    }
    
    
    
}
*/ 

