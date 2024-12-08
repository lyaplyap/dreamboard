import { usePlatform } from '../../../lib';
import { MobileNavigation } from '../MobileNavigation';

export const Footer = () => {
    const platform = usePlatform();

    if (platform === 'MOBILE') {
        return (
            <footer>
                <MobileNavigation />
            </footer>
        );
    }
    
    return null;
};
