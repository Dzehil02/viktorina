import { memo } from 'react';
import cls from './Title.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export type TextAlign = 'left' | 'right' | 'center';

export type TextColor = 'black' | 'white';

interface TitleProps {
    className?: string;
    title?: string;
    subTitle?: string;
    align?: TextAlign;
    color?: TextColor;
}

export const Title = memo((props: TitleProps) => {
    const {
        className,
        title,
        subTitle,
        align = 'left',
        color = 'black',
    } = props;
    const additionalClasses = [className, cls[align], cls[color]];

    return (
        <div className={classNames(cls.Title, {}, additionalClasses)}>
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
        </div>
    );
});
