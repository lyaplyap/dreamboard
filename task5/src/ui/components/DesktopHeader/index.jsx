import { usePlatform, useRoute } from '../../../lib';
import { IconGift, IconCart, IconUsers, IconMenu, IconPlus } from '../../icons';
import { Button } from '../Button';

import styles from './index.module.css';

export const DesktopHeader = () => {
    const platform = usePlatform();
    const route = useRoute();

    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.logotype}>
                    <a href="/">
                        <span>dream</span>
                        <span>board</span>
                    </a>
                </h1>
                <nav>
                    <ul className={styles.actions}>
                        {platform === 'DESKTOP' && (
                            <>
                                <li>
                                    <Button
                                        icon={<IconGift/>}
                                        color="biloba-flower"
                                        size="m"
                                        view={route === 'DREAMS' ? 'default' : 'clear'}
                                        as="a"
                                        href="/dreams"
                                    >
                                        My dreams
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        icon={<IconCart/>}
                                        color="biloba-flower"
                                        size="m"
                                        view={route === 'IDEAS' ? 'default' : 'clear'}
                                        as="a"
                                        href="/ideas"
                                    >
                                        Gift ideas
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        icon={<IconUsers/>}
                                        color="biloba-flower"
                                        size="m"
                                        view={route === 'FRIENDS' ? 'default' : 'clear'}
                                        as="a"
                                        href="/friends"
                                    >
                                        Friends
                                    </Button>
                                </li>
                            </>
                        )}
                        {platform === 'TABLET' && (
                            <li>
                                <Button
                                    icon={<IconMenu />}
                                    color="biloba-flower"
                                    view="default"
                                    size="m"
                                    aria-label="Menu"
                                    aria-expanded={false}
                                />
                            </li>
                        )}
                        <li>
                            <Button
                                icon={<IconPlus />}
                                color="sulu"
                                view="default"
                                size="m"
                                aria-label="Add a new gift"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
