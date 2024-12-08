import { useState, useEffect, useCallback, useMemo } from 'react';

const MEDIA_QUERIES = ['(max-width: 520px)', '(max-width: 1080px)'];
const PLATFORMS = ['MOBILE', 'TABLET', 'DESKTOP'];

export const usePlatform = () => {
    const mediaQueryList = useMemo(() => MEDIA_QUERIES.map((query) => window.matchMedia(query)), []);

    const getValue = useCallback(
        () => {
            const index = mediaQueryList.findIndex((mql) => mql.matches);
            
            return typeof PLATFORMS[index] !== 'undefined'
                ? PLATFORMS[index]
                : PLATFORMS[2];
        },
        [mediaQueryList]
    );
  
    const [platform, setPlatform] = useState(getValue);
  
    useEffect(
        () => {
            const handler = () => setPlatform(getValue);
            
            mediaQueryList.forEach((mql) => mql.addEventListener('change', handler));
            
            return () => {
                mediaQueryList.forEach((mql) => mql.removeEventListener('change', handler));
            };
        },
        [getValue, mediaQueryList]
    );
  
    return platform;
};
