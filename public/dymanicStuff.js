class Card {
    constructor(id, faceImage) {
        this.id = id;
        this.faceImage = "";
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

let accessKey = 'OsngyfLfJjoY56d3iErkWIs-fLtc0ETBQP5RIM63R3k'
let secretKey = 'r_PiSjKgNyMXQEr0lHy1NkR5SkUauWni64BL7Cc9Egg'


function createCards(level){
    if(level == 'kids') {
        for(let i = 0, i <= 12, i++) {
            let id = 'card_'+ i;
            let faceImage = 
            cardElement = new Card(id, )
        }
    }

}

