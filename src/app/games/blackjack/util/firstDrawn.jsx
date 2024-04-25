const firstDrawn = (deck) => {
    const cards = {}
    for(let i = 1; i <= 4; i++){
    let card = deck.cards.shift();
        switch(i){
            case 1:
            cards.card1= `/imgs/cards/${card.value + card.suit}.png`
            break;

            case 2:
            cards.card2 = `/imgs/cards/${card.value + card.suit}.png`
            break;

            case 3:
            cards.card3 = `/imgs/cards/${card.value + card.suit}.png`
            break;

            case 4:
            cards.card4 = `/imgs/cards/${card.value + card.suit}.png`
            break;

            default:
            console.log('Error on FirstDrawn.jsx');
            break;
        }
    }

    return (cards)
}
export default firstDrawn