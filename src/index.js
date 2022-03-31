const section = document.querySelector('.photo-grid');
const container = section.querySelector('.photo-grid__container');
// const items = container.querySelectorAll('.photo-grid__item');
const card = container.querySelector('.photo-grid__item');
// const itemImage = item.querySelector('.photo-grid__slider-pic');
// const itemAuthor = item.querySelector('.photo-grid__pic-author');
const nextBtn = section.querySelector('#btn-next');
const prevBtn = section.querySelector('#btn-prev');
const paragraph = section.querySelector('.photo-grid__paragraph');
const authorPicture = section.querySelector('.photo-grid__author-pic');
const nickName = section.querySelector('.photo-grid__nickname');
const tgNickName = section.querySelector('.photo-grid__author-nickname');
const rareBtn = section.querySelector('#rare-btn');
const veryRareBtn = section.querySelector('#very-rare-btn');

const cardList = container.querySelector('.photo-grid__track');
const cardTemplate = document.querySelector('.element__template').content; //достаем шаблон из template

let currentIndex = 0;
let isRare = true;

const createCard = (item, type)  => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardAuthor = cardElement.querySelector('.element__author');

    cardImage.src = `./assets/images/${type ? item.picture_1 : item.picture_2}`;
    cardImage.alt = 'очень красивое фото';
    cardAuthor.textContent = `${item.name}`;

    return cardElement;
};

const renderCards = (item, type) => {
    const element = createCard(item, type);
    cardList.append(element);
};

const cardRendering = (items, type) => {
    items.forEach((item) => {
        renderCards(item, type);
    });
};

const removeElements = (list) => {
    console.log('deleted');
    while(list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}

cardRendering(initialCards, isRare);

showSlides(currentIndex);

function showSlides(n) {
    const items = container.querySelectorAll('.photo-grid__item');

    items.forEach((item) => {
        item.setAttribute('style', 'order: 1');
    });

    paragraph.textContent = '';

    let index = n;
    let prevIndex = index - 1;
    let nextIndex = index + 1;

    if (n === items.length - 1) {
        currentIndex = items.length - 1;
        index = currentIndex;
        prevIndex = index - 1;
        nextIndex = 0;
    }
    if (n > items.length - 1) {
        currentIndex = 0;
        index = currentIndex;
        prevIndex = items.length - 1;
        nextIndex = index + 1;
    }
    if (n === 0) {
        currentIndex = 0;
        index = currentIndex;
        prevIndex = items.length - 1;
        nextIndex = index + 1;
    }
    if (n < 0) {
        currentIndex = items.length - 1;
        index = currentIndex;
        nextIndex = 0;
        prevIndex = index - 1;
    }

    // меняем порядок отрисовки компонента с изображением на странице
    items[prevIndex].setAttribute('style', 'order: -2');
    items[index].setAttribute('style', 'order: -1');
    items[nextIndex].setAttribute('style', 'order: 0');

    //работаем с селекторами для установки стилей на элементы изображения и подписи автора
    items[prevIndex].querySelector('.photo-grid__image').classList.remove('photo-grid__image_active');
    items[prevIndex].querySelector('.photo-grid__author').classList.remove('photo-grid__author_active');
    items[nextIndex].querySelector('.photo-grid__author').classList.remove('photo-grid__author_active');
    items[nextIndex].querySelector('.photo-grid__image').classList.remove('photo-grid__image_active');
    items[index].querySelector('.photo-grid__author').classList.add('photo-grid__author_active');
    items[index].querySelector('.photo-grid__image').classList.add('photo-grid__image_active');

    //подгружаем в DOM значения из массива значений.
    paragraph.textContent = initialCards[index].text;
    nickName.textContent = `«${initialCards[index].nickname}»`;
    authorPicture.src = `./assets/images/${initialCards[index].photo}`;
    tgNickName.textContent = initialCards[index].tg_nickname;
}

//слушатели событий на кнопках
nextBtn.addEventListener('click', (e) => {
    prevBtn.classList.remove('button__icon_active');
    nextBtn.classList.add('button__icon_active');
    showSlides(currentIndex +=1);
});

prevBtn.addEventListener('click', (e) => {
    prevBtn.classList.add('button__icon_active');
    nextBtn.classList.remove('button__icon_active');
    showSlides(currentIndex -=1);
});

rareBtn.addEventListener('click', () => {
    veryRareBtn.classList.remove('button__icon_active');
    rareBtn.classList.add('button__icon_active');
    removeElements(cardList);
    currentIndex = 0;
    isRare = true;
    cardRendering(initialCards, isRare);
    showSlides(currentIndex);
})

veryRareBtn.addEventListener('click', () => {
    rareBtn.classList.remove('button__icon_active');
    veryRareBtn.classList.add('button__icon_active');
    removeElements(cardList);
    currentIndex = 0;
    isRare = false;
    cardRendering(initialCards, isRare);
    showSlides(currentIndex);
});
