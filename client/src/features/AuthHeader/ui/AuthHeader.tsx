import cls from './AuthHeader.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import { useNavigate } from 'react-router-dom';

interface AuthHeaderProps {
    className?: string;
}

export const AuthHeader = (props: AuthHeaderProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegistration = () => {
        navigate('/registration');
    };

    return (
        <div className={classNames(cls.btnWrapper, {}, [className])}>
            <Button
                onClick={navigateToRegistration}
                size='m'
                variant='outline'
            >
                Регистрация
            </Button>
            <Button
                onClick={navigateToLogin}
                size='m'
                variant='outline'
            >
                Войти
            </Button>
        </div>
    );
};
