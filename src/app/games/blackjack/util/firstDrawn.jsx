const firstDrawn = (deck) => {
    const cards = {};
    const card1 = deck.cards.shift();
    const card2 = deck.cards.shift();
    const card3 = deck.cards.shift();
    const card4 = deck.cards.shift();

    cards.card1 = `/imgs/cards/${card1.value + card1.suit}.png`;
    cards.card2 = `/imgs/cards/${card2.value + card2.suit}.png`;
    cards.card3 = `/imgs/cards/${card3.value + card3.suit}.png`;
    cards.card4 = `/imgs/cards/${card4.value + card4.suit}.png`;

    return cards;
};

export default firstDrawn;
