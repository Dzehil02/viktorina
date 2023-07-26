import { Link } from 'react-router-dom';
import './Header.css'
import { Avatar } from '../Avatar/Avatar';
import avatar from '../../assets/Avatar.png'

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