export const getEyeTemplate = (size = 'm') => {
    if (size === 'm') {
        return `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_51)">
                    <path d="M0.666626 8.00008C0.666626 8.00008 3.33329 2.66675 7.99996 2.66675C12.6666 2.66675 15.3333 8.00008 15.3333 8.00008C15.3333 8.00008 12.6666 13.3334 7.99996 13.3334C3.33329 13.3334 0.666626 8.00008 0.666626 8.00008Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_11_51">
                        <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        `;
    }

    if (size === 'l') {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    return '';
};