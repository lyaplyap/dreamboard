import cn from 'classnames';

import styles from './index.module.css';

export const Button = ({
    size = 'm',
    view = 'default',
    color = 'biloba-flower',
    icon,
    children,
    className,
    as: Tag = 'button',
    ...props
}) => {
    return (
        <Tag
            {...props}
            className={
                cn(
                    styles.button,
                    styles[`button--size_${size}`],
                    styles[`button--view_${view}`],
                    styles[`button--color_${color}`],
                    className
                )
            }
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            {children && <span className={styles.action}>{children}</span>}
        </Tag>
    );
};
