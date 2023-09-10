import { Link } from 'react-router-dom';
import { Input } from '../../../shared/ui/Input';
import cls from './AuthByUsername.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';

interface AuthByUsernameProps {
    className?: string;
}

export const AuthByUsername = (props: AuthByUsernameProps) => {

    const {className} = props;
    
    return (

            <div className={classNames(cls.AuthByUsername, {}, [className])}>
                <div className={classNames(cls.form, {}, [className])}>
                    <Input type='text' placeholder='Введите логин' />
                    <Input type='text' placeholder='Введите пароль' />
                </div>
                <div className={classNames(cls.btnWrapper, {}, [className])}>
                    <Button size='m'>Войти</Button>  
                    <Button size='m'>Регистрация</Button>
                </div>
                <div>
                    <Link to='/tests'>
                        <button>Перейти к тестам</button>
                    </Link>
                    <Link to='/ptests'>
                        <button>Перейти к пройденным тестам</button>
                    </Link>
                </div>
            </div>


    )
}