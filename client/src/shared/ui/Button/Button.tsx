import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonAction = 'cancel' | 'accept';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    action?: ButtonAction;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = 'filled',
        size = 'm',
        action = '',
        children,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(
                cls.Button,
                mods,
                [className, cls[variant], cls[size], cls[action]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
