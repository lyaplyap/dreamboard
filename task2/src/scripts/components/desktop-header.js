import { getGiftTemplate, getCartTemplate, getUsersTemplate, getMenuTemplate, getPlusTemplate } from '../icons';
import { getNavigationActionView } from '../utils/navigation';

export const renderDesktopHeader = () => {
    const header = document.getElementById('header');

    if (!header) {
        throw new Error('#header not found');
    }

    const component = document.createElement('div');

    component.className = 'header--desktop';
    component.innerHTML = `
        <h1 class="logotype">
            <a href="/">
                <span>dream</span>
                <span>board</span>
            </a>
        </h1>
        <nav>
            <ul class="actions">
                <li class="desktop-navigation__action-dreams">
                    <a href="/dreams" class="button button--color_biloba-flower ${getNavigationActionView('dreams')} button--size_m">
                        ${getGiftTemplate()}
                        <span>My dreams</span>
                    </a>
                </li>
                <li class="desktop-navigation__action-ideas">
                    <a href="/ideas" class="button button--color_biloba-flower ${getNavigationActionView('ideas')} button--size_m">
                        ${getCartTemplate()}
                        <span>Gift ideas</span>
                    </a>
                </li>
                <li class="desktop-navigation__action-friends">
                    <a href="/friends" class="button button--color_biloba-flower ${getNavigationActionView('friends')} button--size_m">
                        ${getUsersTemplate()}
                        <span>Friends</span>
                    </a>
                </li>
                <li class="desktop-navigation__action-menu">
                    <button class="button button--color_biloba-flower button--view_default button--size_m">
                        ${getMenuTemplate()}
                    </button>
                </li>
                <li class="desktop-navigation__action-add">
                    <button class="button button--color_sulu button--view_default button--size_m">
                        ${getPlusTemplate()}
                    </button>
                </liv>
            </ul>
        </nav>
    `;

    header.appendChild(component);
};
