import avatar from '../../../shared/assets/Avatar.png'
import { Avatar } from '../../../shared/ui/Avatar';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Context } from '../../../main';
import { useContext } from 'react';
import { Button } from '../../../shared/ui/Button';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { user } = useContext(Context);

  return (
    <header className={classNames(cls.header, {}, [className])}>
      {user.isAuth ? 
        <Avatar
          src={avatar}
          size={50}
          alt="avatar"
          className={classNames(cls.avatar, {}, [className])}
        />
       : 
        <div className={cls.btnWrapper}>
            <Button size='m' className={cls.btn}>Регистрация</Button>
            <Button size='m' className={cls.btn}>Войти</Button>
        </div>
      }
    </header>
  );
};