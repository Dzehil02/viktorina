import avatar from '../../../shared/assets/Avatar.png'
import { Avatar } from '../../../shared/ui/Avatar';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({className}: HeaderProps) => {
    
    return (
        <header className={classNames(cls.header, {}, [className])}>
                <Avatar
                    src={avatar}
                    size={50}
                    alt='avatar' 
                    className={classNames(cls.avatar, {}, [className])}
                />
        </header>
    )
}