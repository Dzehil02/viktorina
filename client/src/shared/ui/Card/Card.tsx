import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from "../../lib/classNames/classNames";
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const { className, children, max, ...otherProps } = props;

  return (
    <div className={classNames(cls.Card, {[cls.max]: max}, [className])} {...otherProps}>
        {children}
    </div>
  );
});
