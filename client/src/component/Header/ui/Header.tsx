import './Header.css'
import avatar from '../../../assets/Avatar.png'
import { Avatar } from '../../Avatar';


interface HeaderProps {
    className?: string;
}

export const Header = ({className}: HeaderProps) => {
    
    return (
        <header className='header'>
                <Avatar
                    src={avatar}
                    size={50}
                    alt='avatar' 
                    className='avatar'
                />
        </header>
    )
}