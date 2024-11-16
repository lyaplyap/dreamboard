export const getGiftTemplate = (size = 'm') => {
    if (size === 'm') {
        return `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_43)">
                    <path d="M13.3334 8V14.6667H2.66675V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6666 4.66675H1.33325V8.00008H14.6666V4.66675Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 14.6667V4.66675" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.99992 4.66659H4.99992C4.55789 4.66659 4.13397 4.49099 3.82141 4.17843C3.50885 3.86587 3.33325 3.44195 3.33325 2.99992C3.33325 2.55789 3.50885 2.13397 3.82141 1.82141C4.13397 1.50885 4.55789 1.33325 4.99992 1.33325C7.33325 1.33325 7.99992 4.66659 7.99992 4.66659Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 4.66659H11C11.442 4.66659 11.866 4.49099 12.1785 4.17843C12.4911 3.86587 12.6667 3.44195 12.6667 2.99992C12.6667 2.55789 12.4911 2.13397 12.1785 1.82141C11.866 1.50885 11.442 1.33325 11 1.33325C8.66667 1.33325 8 4.66659 8 4.66659Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_11_43">
                        <rect width="16" height="16" fill="currentColor"/>
                    </clipPath>
                </defs>
            </svg>
        `;
    }

    if (size === 'l') {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V22H4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 7H2V12H22V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    return '';
};