import { useLocation } from 'react-router-dom';
import { Input } from '../../../shared/ui/Input';
import cls from './AuthByUsername.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../app/router/consts/consts';

interface AuthByUsernameProps {
    className?: string;
}

export const AuthByUsername = (props: AuthByUsernameProps) => {
    const {className} = props;
    const location = useLocation();
    const isLogin = location.pathname === AppRoutes.LOGIN

    
    return (
            <form className={classNames(cls.AuthByUsername, {}, [className])}>
                {isLogin ? <h2>Авторизация</h2> : <h2>Регистрация</h2>}
                <div className={classNames(cls.form, {}, [className])}>
                    <Input type='text' placeholder='Введите логин' />
                    <Input type='text' placeholder='Введите пароль' />
                    {!isLogin && <Input type='text' placeholder='Повторите пароль' />}
                </div>
                <div className={classNames(cls.btnWrapper, {}, [className])}>
                    {isLogin ? <NavLink to={AppRoutes.REGISTRATION}>Зарегистрироваться</NavLink> : <NavLink to={AppRoutes.LOGIN}>Войти</NavLink>}
                    <Button className={cls.btn} size='m'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>  
                </div>
            </form>
    )
}