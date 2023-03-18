import './style.css';
import cardBack from '../../assets/card-back.png'

const Card = ({ selectedCard, setCards, cards }) => {
    const handleClick = () => {
        const localCards = [...cards];

        selectedCard.turned = true;

        setCards(localCards);

        const turnedCards = localCards.filter((card) => {
            return card.turned === true;
        })

        if (turnedCards.length > 2) {
            return
        }
        if (!turnedCards[0].slug || !turnedCards[1].slug) {
            return
        }

        if (turnedCards[0]?.slug === turnedCards[1]?.slug) {

            setTimeout(() => {
                const filteredCards = localCards.filter((card) => {
                    return card.slug !== selectedCard.slug;
                })
                setCards(filteredCards);
            }, 1000)
        } else {
            setTimeout(() => {
                const mappedCards = localCards.map((card) => {
                    card.turned = false;
                    return card
                })
                setCards(mappedCards)
            }, 1500)
        }
    }

    return (
        <img
            onClick={() => handleClick()}
            src={selectedCard.turned ? selectedCard.image : cardBack} alt='card'
        />

    );
}

export default Card;