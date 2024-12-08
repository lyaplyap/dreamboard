import { useState, useMemo, useCallback, useEffect } from 'react';

import { getAllGifts } from '../../api';

import { BADGES } from './constants';

export const useWishlists = () => {
    const wishlists = useMemo(() => BADGES, []);

    return wishlists;
};

export const useGifts = () => {
    const [gifts, setGifts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetch = useCallback(
        async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const gifts = await getAllGifts();

                setGifts(gifts);
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        },
        []
    );

    useEffect(() => {
        fetch();
    }, [fetch]);
        
    return {
        gifts,
        isLoading,
        error
    };
};
