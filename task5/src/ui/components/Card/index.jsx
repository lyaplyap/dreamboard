import { IconEdit } from '../../icons';
import { Button } from '../Button';

import styles from './index.module.css';

export const Card = ({ title, description, photo, price, onEdit }) => {
    return (
        <div className={styles.card}>
            <div className={styles.main}>
                <img src={photo} className={styles.photo} alt="" />
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.price}>{price}</div>
                <Button
                    icon={<IconEdit size="l" />}
                    size="l"
                    color="sulu"
                    view="default"
                    onClick={onEdit}
                    aria-label="Edit gift info"
                />
            </div>
        </div>
    );
};
