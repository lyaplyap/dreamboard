import { usePlatform } from '../../../lib';
import { DesktopHeader } from '../DesktopHeader';
import { MobileHeader } from '../MobileHeader';

export const Header = () => {
    const platform = usePlatform();

    if (platform === 'MOBILE') {
        return <MobileHeader />;
    }

    return <DesktopHeader />;
};
