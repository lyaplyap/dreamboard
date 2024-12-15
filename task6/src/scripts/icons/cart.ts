import { GetIconTemplate } from './types';

export const getCartTemplate: GetIconTemplate = (size = 'm') => {
    if (size === 'm') {
        return `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1.33325L2 3.99992V13.3333C2 13.6869 2.14048 14.026 2.39052 14.2761C2.64057 14.5261 2.97971 14.6666 3.33333 14.6666H12.6667C13.0203 14.6666 13.3594 14.5261 13.6095 14.2761C13.8595 14.026 14 13.6869 14 13.3333V3.99992L12 1.33325H4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 4H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6666 6.66675C10.6666 7.37399 10.3856 8.05227 9.88554 8.55237C9.38544 9.05246 8.70716 9.33341 7.99992 9.33341C7.29267 9.33341 6.6144 9.05246 6.1143 8.55237C5.6142 8.05227 5.33325 7.37399 5.33325 6.66675" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    if (size === 'l') {
        return `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    }

    return '';
};