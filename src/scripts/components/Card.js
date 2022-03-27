//Класс для создания карточки автора

export default class Card {
    static selectors = {
        imageSelector: '.photo-grid__slider-pic',
        nameSelector: '.photo-grid__pic-author',
        paragraphSelector: '.photo-grid__paragraph',
        authorPhotoSelector: '.photo-grid__author-pic',
        authorTgNicknameSelector: '.photo-grid__author-nickname',
    };

    constructor(data, cardSelector) {
        const {
            name,
            nickname,
            picture_1,
            picture_2,
            author_pic,
            text,
            tg_nickname,
        } = data;
        this._name = name;
        this._nickname = nickname;
        this._picture1 = picture_1;
        this._pictuer2 = picture_2;
        this._authorPic = author_pic;
        this._text = text;
        this._tgNickname = tg_nickname;
        this._cardSelector = cardSelector;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(
            Card.selectors.imageSelector,
        );
        this._cardAuthorName = this._element.querySelector(
            Card.selectors.nameSelector,
        );
        this._cardParagraph = this._element.querySelector(
            Card.selectors.paragraphSelector,
        );
        this._cardAuthorPhoto = this._element.querySelector(
            Card.selectors.authorPhotoSelector,
        );
        this._cardTgNickname = this._element.querySelector(
            Card.selectors.authorTgNicknameSelector,
        );
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content.querySelector('.photo-grid__item')
            .cloneNode(true);
    }

    generateCard() {
        this._cardImage.src = `src/images/${this._picture1}`;
        this._cardImage.alt = `Нам очень жаль что вы не можете увидеть эту
		красивую фотографию`;
        this._cardAuthorName.textContent = this._name;
        this._cardParagraph.textContent = this._text;
        this._cardAuthorPhoto.src = `src/images/${this._authorPic}`;
        this._cardAuthorPhoto.alt = `Фото автора ${this._name}`;
        this._cardTgNickname.text = `&#64;${this._tgNickname}`;

        return this._element;
    }
}
