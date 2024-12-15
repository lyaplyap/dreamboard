import { renderDesktopHeader } from './components/desktop-header';
import { renderGiftCards } from './components/gift-cards';
import { renderMobileHeader } from './components/mobile-header';
import { renderMobileNavigation } from './components/mobile-navigation';
import { renderWishlistCards } from './components/wishlist-cards';
import { renderModal } from './components/modal';
import { BADGES } from './constants';
import { isActivePage } from './utils/active-page';
import { store } from './store';

const renderApp = async () => {
    renderDesktopHeader();
    renderMobileHeader();
    renderMobileNavigation();

    if (isActivePage('dreams')) {
        await store.init();

        renderWishlistCards(BADGES);
        renderGiftCards(store.getAll());
        renderModal();
    }
};

window.addEventListener('DOMContentLoaded', () => {
    renderApp();
});
