import { useMemo } from 'react';

const getRoute = () => {
    const route = location.pathname.split('/')[1];
    
    switch (route) {
        case 'friends':
            return 'FRIENDS';
        case 'ideas':
            return 'IDEAS';
        case 'dreams':
        case '':
        default:
            return 'DREAMS';
    }
};

export const useRoute = () => {
    const route = useMemo(getRoute, []);

    return route;
};
