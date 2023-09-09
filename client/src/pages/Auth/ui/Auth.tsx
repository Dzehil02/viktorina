import { Link } from 'react-router-dom';
import { Input } from '../../../shared/ui/Input';
import cls from './Auth.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';

interface AuthProps {
    className?: string;
}

export const Auth = (props: AuthProps) => {

    const {className} = props;
    
    return (

            <div className={classNames(cls.Auth, {}, [className])}>
                <div className={classNames(cls.form, {}, [className])}>
                    <Input type='text' placeholder='Введите логин' />
                    <Input type='text' placeholder='Введите пароль' />
                </div>
                <div className={'btnWrapper'}>
                    <button>Войти</button>
                    <button>Регистрация</button>
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