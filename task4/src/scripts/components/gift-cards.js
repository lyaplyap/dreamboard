import { getEditTemplate } from '../icons';

const createCardComponent = ({ title, description, photo, price }) => {
    const component = document.createElement('div');

    component.className = 'gift';
    component.innerHTML = `
        <div class="gift__main">
            <img src="${photo}" class="gift__picture" alt="">
            <div class="gift__info">
                <h2 class="gift__title">${title}</h2>
                <div class="gift__description">${description}</div>
            </div>
        </div>
        <div class="gift__footer">
            <div class="gift__price">${price}</div>
            <button class="button button--size_l button--color_sulu button--view_default">
                ${getEditTemplate('l')}
            </button>
        </div>
    `;

    return component;
};

export const renderGiftCards = (gifts) => {
    const container = document.getElementById('gift-cards');

    if (!container) {
        throw new Error('#gift-cards not found');
    }

    for (const gift of gifts) {
        const listItem = document.createElement('li');
        const giftComponent = createCardComponent(gift);

        listItem.appendChild(giftComponent);
        container.appendChild(listItem);
    }
};

export const renderNewGiftCard = (gift) => {
    const container = document.getElementById('gift-cards');

    if (!container) {
        throw new Error('#gift-cards not found');
    }

    const listItem = document.createElement('li');
    const giftComponent = createCardComponent(gift);

    listItem.appendChild(giftComponent);
    container.appendChild(listItem);
};
