import cn from 'classnames';

import { IconPlus } from '../../icons';

import styles from './index.module.css';

export const Badge = ({ color, type, view, title, count, ...props }) => {
    const component = document.createElement('button');

    component.classList.add(
        'wishlist',
        `wishlist--color_${color}`,
        `wishlist--type_${type}`,
        `wishlist--view_${view}`
    );

    return (
        <button
            className={
                cn(
                    styles.badge,
                    styles[`badge--color_${color}`],
                    styles[`badge--view_${view}`],
                    styles[`badge--type_${type}`]
                )
            }
            {...props}
        >
            {type !== 'action' ? (
                <>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.count}>{count}</span>
                </>
            ) : (
                <IconPlus size="l" />
            )}
        </button>
    );
};
