import { Badge } from '../../ui/components/Badge';
import { Card } from '../../ui/components/Card';
import { useGifts, useWishlists } from './hooks';
import styles from './index.module.css';

export const PageDreams = () => {
    const wishlists = useWishlists();
    const { gifts } = useGifts();

    return (
        <div className={styles.page}>
            <ul className={styles.badgeList}>
                {wishlists.map(({ id, ...props }) => (
                    <li key={id}>
                        <Badge {...props} onClick={() => console.log(`on badge "${id}" click`)} />
                    </li>
                ))}
            </ul>
            <ul className={styles.giftList}>
                {gifts.map(({ id, ...props }) => (
                    <li key={id}>
                        <Card {...props} onEdit={() => console.log(`on gift "${id}" edit`)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
