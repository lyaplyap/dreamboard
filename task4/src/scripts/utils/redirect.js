export const redirectToMainPage = () => {
    if (location.pathname === '/') {
        window.open('/dreams', '_self');
    }
};