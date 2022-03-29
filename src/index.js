const section = document.querySelector('.photo-grid');
const container = section.querySelector('.photo-grid__container');
const items = container.querySelectorAll('.photo-grid__item');
const item = container.querySelector('.photo-grid__item');
const itemImage = item.querySelector('.photo-grid__slider-pic');
const itemAuthor = item.querySelector('.photo-grid__pic-author');
const nextBtn = section.querySelector('#btn-next');
const prevBtn = section.querySelector('#btn-prev');
const nickNames = section.querySelectorAll('.photo-grid__nickname');
const paragraph = section.querySelector('.photo-grid__paragraph');
const authorPicture = section.querySelector('.photo-grid__author-pic');

let currentIndex = 0;
showSlides(currentIndex);

function showSlides(n) {
    items.forEach((item) => {
        item.setAttribute('style', 'order: 1');
    });

    nickNames.forEach((item) => {
        item.classList.remove('photo-grid__nickname_active');
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

    // console.log("prevIndex", prevIndex);
    // console.log("currentIndex",index);
    // console.log("nextIndex", nextIndex);

    items[prevIndex].setAttribute('style', 'order: -2');
    items[index].setAttribute('style', 'order: -1');
    items[nextIndex].setAttribute('style', 'order: 0');
    nickNames[index].classList.add('photo-grid__nickname_active');
    paragraph.textContent = initialCards[index].text;
    authorPicture.src = `./assets/images/${initialCards[index].photo}`;

    // console.log(prevIndex, getComputedStyle(items[prevIndex]).order);
    // console.log(getComputedStyle(items[index]).order);
    // console.log(getComputedStyle(items[nextIndex]).order);
}

nextBtn.addEventListener('click', (e) => {
    console.log('hi');
    console.log('inner', currentIndex);
    showSlides(currentIndex);
    currentIndex += 1;
    console.log('outer', currentIndex);
});

prevBtn.addEventListener('click', (e) => {
    console.log('hi1');
    showSlides(currentIndex);
    currentIndex -= 1;
});
