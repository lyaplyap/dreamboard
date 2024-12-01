import { getPlusTemplate } from "../icons";

const createCardComponent = ({ color, type, view, title, count, onClick }) => {
    const component = document.createElement('button');

    component.classList.add(
        'wishlist',
        `wishlist--color_${color}`,
        `wishlist--type_${type}`,
        `wishlist--view_${view}`
    );

    if (type === 'action') {
        component.innerHTML = getPlusTemplate('l');
    } else {
        component.innerHTML = `
            <span class="title">${title}</span>
            <span class="count">${count}</span>
        `;
    }

    component.addEventListener('click', onClick);

    return component;
};

export const renderWishlistCards = (badges) => {
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