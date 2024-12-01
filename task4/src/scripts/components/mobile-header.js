import avatarUrl from '../../assets/images/pink-hair-girl.jpg';
import { getChevronLeftTemplate } from '../icons';

export const renderMobileHeader = () => {
    const header = document.getElementById('header');

    if (!header) {
        throw new Error('#header not found');
    }

    const component = document.createElement('div');

    component.className = 'header--mobile';
    component.innerHTML = `
        <button class="button button--color_sulu button--view_clear button--size_l">
            ${getChevronLeftTemplate('l')}
        </button>
        <h1 class="logotype">
            <a href="/">
                <span>dream</span>
                <span>board</span>
            </a>
        </h1>
        <a href="/profile" class="avatar">
            <img src="${avatarUrl}" alt="Avatar">
        </a>
    `;

    header.appendChild(component);
};