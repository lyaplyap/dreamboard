import { IconChevronLeft } from '../../icons';
import { Button } from '../Button';

import styles from './index.module.css';

export const MobileHeader = () => {
    return (
        <header className={styles.header}>
            <div>
                <Button
                    view="clear"
                    size="l"
                    color="sulu"
                    icon={<IconChevronLeft size="l" />}
                />
                <h1 className={styles.logotype}>
                    <a href="/">
                        <span>dream</span>
                        <span>board</span>
                    </a>
                </h1>
                <a href="/profile" className={styles.avatar}>
                    <img src="/avatar.jpg" alt="Avatar" />
                </a>
            </div>
        </header>
    );
};
