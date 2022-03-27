// основаной файл с логикой

alert('Hi');

import './index.css';

import { initialCards } from '../scripts/utils/initialCards';

import Card from '../scripts/components/Card';

import Section from '../scripts/components/Section';

const cardSection = document.querySelector('#card-section');

const createCard = (data) => {
    const card = new Card(data, '#card-template');
    return card.generateCard();
};

const cardList = new Section(
    {
        cards: initialCards,
        renderer: (data) => {
            console.log('hi');
            cardList.addCard(createCard(data));
        },
    },
    cardSection,
);
createCard(initialCards);
cardList.renderCard();

// createCard(initialCards);
