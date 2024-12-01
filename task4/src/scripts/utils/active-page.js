export const isActivePage = (page) => {
    const activePage = window.location.pathname.split('/')[1];

    return activePage === page || activePage === '';
};
