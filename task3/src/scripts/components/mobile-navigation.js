import { getGiftTemplate, getCartTemplate, getUsersTemplate, getPlusTemplate } from '../icons';
import { isActivePage } from '../utils/active-page';
import { getNavigationActionView } from '../utils/navigation';

export const renderMobileNavigation = () => {
    const footer = document.getElementById('footer');

    if (!footer) {
        throw new Error('#footer not found');
    }

    const component = document.createElement('nav');
    
    component.className = 'mobile-navigation';
    component.innerHTML = `
        <ul>
            <li>
                <a href="/dreams" class="button button--color_biloba-flower ${getNavigationActionView('dreams')} button--size_l">
                    ${getGiftTemplate('l')}
                    ${isActivePage('dreams') ? '<span>My dreams</span>' : ''}
                </a>
            </li>
            <li>
                <a href="/ideas" class="button button--color_biloba-flower ${getNavigationActionView('ideas')} button--size_l">
                    ${getCartTemplate('l')}
                    ${isActivePage('ideas') ? '<span>Gift ideas</span>' : ''}
                </a>
            </li>
            <li>
                <a href="/friends" class="button button--color_biloba-flower ${getNavigationActionView('friends')} button--size_l">
                    ${getUsersTemplate('l')}
                    ${isActivePage('friends') ? '<span>Friends</span>' : ''}
                </a>
            </li>
            <li>
                <button class="button button--size_l button--color_sulu button--view_default">
                    ${getPlusTemplate('l')}
                </button>
            </li>
        </ul>
    `;

    footer.appendChild(component);
};