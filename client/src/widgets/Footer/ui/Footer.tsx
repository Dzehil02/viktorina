import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {

  return (
    <div className={classNames(cls.footer, {}, [className])}>
        <p>ссылка на гитхаб проекта</p>
        <p>2023</p>
        <p>изменить тему или язык</p>
    </div>
  );
};