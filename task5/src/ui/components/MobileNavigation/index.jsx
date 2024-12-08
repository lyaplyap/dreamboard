import { useRoute } from '../../../lib';
import { IconGift, IconCart, IconUsers, IconPlus } from '../../icons';
import { Button } from '../Button';

import styles from './index.module.css';

export const MobileNavigation = () => {
    const route = useRoute();

    return (
        <nav className={styles.mobileNavigation}>
            <ul>
                <li>
                    <Button
                        icon={<IconGift size="l" />}
                        as='a'
                        href='/dreams'
                        color="biloba-flower"
                        view={route === 'DREAMS' ? 'default' : 'clear'}
                        size="l"
                    >
                        {route === 'DREAMS' && 'My dreams'}
                    </Button>
                </li>
                <li>
                    <Button
                        icon={<IconCart size="l" />}
                        as='a'
                        href='/ideas'
                        color="biloba-flower"
                        view={route === 'IDEAS' ? 'default' : 'clear'}
                        size="l"
                    >
                        {route === 'IDEAS' && 'Gift ideas'}
                    </Button>
                </li>
                <li>
                    <Button
                        icon={<IconUsers size="l" />}
                        as='a'
                        href='/friends'
                        color="biloba-flower"
                        view={route === 'FRIENDS' ? 'default' : 'clear'}
                        size="l"
                    >
                        {route === 'FRIENDS' && 'Friends'}
                    </Button>
                </li>
                <li>
                    <Button
                        icon={<IconPlus size="l" />}
                        color="sulu"
                        view="default"
                        size="l"
                        aria-label="Add a new gift"
                    />
                </li>
            </ul>
        </nav>
    );
};
