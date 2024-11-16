import { renderDesktopHeader } from './components/desktop-header';
import { renderGiftCards } from './components/gift-cards';
import { renderMobileHeader } from './components/mobile-header';
import { renderMobileNavigation } from './components/mobile-navigation';
import { renderWishlistCards } from './components/wishlist-cards';
import { renderModal } from './components/modal';
import { BADGES } from './constants';
import { isActivePage } from './utils/active-page';
import { redirectToMainPage } from './utils/redirect';
import { store } from './store';

const renderApp = () => {
    renderDesktopHeader();
    renderMobileHeader();
    renderMobileNavigation();

    if (isActivePage('dreams')) {
        renderWishlistCards(BADGES);
        renderGiftCards(store.getAll());
        renderModal();
    }
};

window.addEventListener('DOMContentLoaded', () => {
    redirectToMainPage();
    renderApp();
});
