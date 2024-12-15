export const isActivePage = (page: string) => {
    const activePage = window.location.pathname.split('/')[1];

    return activePage === page || activePage === '';
};
