import { isActivePage } from './active-page';

export const getNavigationActionView = (page) =>
    isActivePage(page)
        ? 'button--view_default'
        : 'button--view_clear';