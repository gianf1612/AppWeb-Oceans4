export const typeCards = Object.freeze({
  hand: 'handCard',
  boardCard: 'boardCard',
});

class Card {
  constructor(alt = null, src = null, name = null, color = null, type = 'boardCard') {
    this.name = name;
    this.alt = alt;
    this.imgSrc = src;
    this.color = color;
    this.clicked = false;
    this.type = type;
  }
}

export default Card;
