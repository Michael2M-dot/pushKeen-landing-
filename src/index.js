const section = document.querySelector('.photo-grid');
const container = section.querySelector('.photo-grid__container');
const items = container.querySelectorAll('.photo-grid__item');
const item = container.querySelector('.photo-grid__item');
const itemImage = item.querySelector('.photo-grid__slider-pic');
const itemAuthor = item.querySelector('.photo-grid__pic-author');
const nextBtn = section.querySelector('#btn-next');
const prevBtn = section.querySelector('#btn-prev');
const paragraph = section.querySelector('.photo-grid__paragraph');
const authorPicture = section.querySelector('.photo-grid__author-pic');
const nickName = section.querySelector('.photo-grid__nickname');
const tgNickName = section.querySelector('.photo-grid__author-nickname');

let currentIndex = 0;
showSlides(currentIndex);

function showSlides(n) {
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
        console.log('hi');
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
