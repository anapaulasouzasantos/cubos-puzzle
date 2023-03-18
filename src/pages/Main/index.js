import './style.css';
import Logo from '../../assets/Logo.svg';
import Congratulations from '../../assets/congrats.png';
import Card from '../../components/Card';
import cardsObj from '../../cards';
import { useState } from 'react';


function Main() {

  const [cards, setCards] = useState([...cardsObj])

  const handleCards = () => {
    const mappedCards = cardsObj.map((card) => {
      card.turned = false;
      return card
    })
    const shuffledCards = mappedCards.sort((a, b) => 0.5 - Math.random());
    setCards(shuffledCards)
  }


  return (
    <div className='container'>
      <div className='sidebar'>
        <img className='logo' src={Logo} alt='logo'></img>
        <button onClick={() => handleCards()} className='btn-reset'>Reset</button>
      </div>
      <div className='all-cards'>
        {cards.length ?
          cards.map((card) => (
            <Card
              key={card.id}
              selectedCard={card}
              setCards={setCards}
              cards={cards}
            />
          )) :
          (<img src={Congratulations} alt='congratulations' />)
        }

      </div>
    </div>
  );
}

export default Main;
