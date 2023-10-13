import { useLocation } from 'react-router-dom';
import { Input } from '../../../shared/ui/Input';
import cls from './AuthByUsername.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from '../../../app/router/consts/consts';
import { Title } from '../../../shared/ui/Title';

interface AuthByUsernameProps {
    className?: string;
    onChangeLogin?: (value?: string) => void;
    onChangePassword?: (value?: string) => void;
    onChangeRepeatPassword?: (value?: string) => void;
}

export const AuthByUsername = (props: AuthByUsernameProps) => {
    const {
        className,
        onChangeLogin,
        onChangePassword,
        onChangeRepeatPassword,
    } = props;
    const location = useLocation();
    const isLogin = location.pathname === AppRoutes.LOGIN;

    return (
        <form className={classNames(cls.AuthByUsername, {}, [className])}>
            {isLogin ? (
                <Title
                    subTitle={'Авторизация'}
                    color='white'
                    align='center'
                ></Title>
            ) : (
                <Title
                    subTitle={'Регистрация'}
                    color='white'
                    align='center'
                ></Title>
            )}
            <div className={classNames(cls.form, {}, [className])}>
                <Input
                    onChange={onChangeLogin}
                    type='text'
                    placeholder='Введите логин'
                />
                <Input
                    onChange={onChangePassword}
                    type='text'
                    placeholder='Введите пароль'
                />
                {!isLogin && (
                    <Input
                        onChange={onChangeRepeatPassword}
                        type='text'
                        placeholder='Повторите пароль'
                    />
                )}
            </div>
            <div className={classNames(cls.btnWrapper, {}, [className])}>
                {isLogin ? (
                    <NavLink to={AppRoutes.REGISTRATION}>
                        Зарегистрироваться
                    </NavLink>
                ) : (
                    <NavLink to={AppRoutes.LOGIN}>Войти</NavLink>
                )}
                <Button
                    className={cls.btn}
                    size='m'
                >
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </div>
        </form>
    );
};
