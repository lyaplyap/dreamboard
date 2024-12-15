import { getPlusTemplate } from '../icons';
import { Badge, CardBadge } from '../types';

const isCardBadge = (badge: Badge): badge is CardBadge => badge.type === 'card';

const createCardComponent = (badge: Badge) => {
    const component = document.createElement('button');

    const { color, type, view, onClick } = badge;

    component.classList.add(
        'wishlist',
        `wishlist--color_${color}`,
        `wishlist--type_${type}`,
        `wishlist--view_${view}`
    );

    if (isCardBadge(badge)) {
        const { title, count } = badge;

        component.innerHTML = `
            <span class="title">${title}</span>
            <span class="count">${count}</span>
        `;
    } else {
        component.innerHTML = getPlusTemplate('l');
    }

    if (onClick) {
        component.addEventListener('click', onClick);
    }

    return component;
};

export const renderWishlistCards = (badges: Badge[]) => {
    const container = document.getElementById('wishlist-cards');

    if (!container) {
        throw new Error('#wishlist-cards not found');
    }

    for (const badge of badges) {
        const listItem = document.createElement('li');
        const giftComponent = createCardComponent({
            ...badge,
            onClick: () => console.log(`badge "${badge.id}" click`)
        });

        listItem.appendChild(giftComponent);
        container.appendChild(listItem);
    }
};