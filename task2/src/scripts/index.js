import { renderDesktopHeader } from './components/desktop-header';
import { renderGiftCards } from './components/gift-cards';
import { renderMobileHeader } from './components/mobile-header';
import { renderMobileNavigation } from './components/mobile-navigation';
import { renderWishlistCards } from './components/wishlist-cards';
import { BADGES, GIFTS } from './constants';
import { isActivePage } from './utils/active-page';
import { redirectToMainPage } from './utils/redirect';

const renderApp = () => {
    renderDesktopHeader();
    renderMobileHeader();
    renderMobileNavigation();

    if (isActivePage('dreams')) {
        renderWishlistCards(BADGES);
        renderGiftCards(GIFTS);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    redirectToMainPage();
    renderApp();
});
