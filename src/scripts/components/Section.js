//Рендер для блока

export default class Section {
    constructor({ cards, renderer }, container) {
        this._renderedCards = cards;
        this._renderer = renderer;
        this._contaier = container;
    }

    renderCard() {
        this._renderedCards.forEach((item) => {
            this._renderer(item);
        });
        // this._renderer(this._renderedCards);
    }

    addCard(element) {
        this._contaier.append(element);
    }
}
