import cls from './Header.module.scss';
import { Context } from '../../../main';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { AvatarDropdown } from '../../../features/AvatarDropdown/ui/AvatarDropdown';
import { AuthHeader } from '../../../features/AuthHeader';
import { classNames } from '@/shared/lib/classNames/classNames';

interface HeaderProps {
    className?: string;
}

export const Header = observer(({ className }: HeaderProps) => {
    const { user } = useContext(Context);

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            {user.isAuth ? <AvatarDropdown /> : <AuthHeader />}
        </header>
    );
});
