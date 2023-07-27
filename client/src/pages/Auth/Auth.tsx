import { Link } from 'react-router-dom';
import './Auth.css'

interface AuthProps {
    className?: string;
}

export const Auth = (props: AuthProps) => {
    
    return (

            <div className={'Auth'}>
                <div className={'form'}>
                    <input className={'input'} type='text' placeholder='Введите логин' />
                    <input className={'input'} type='text' placeholder='Введите пароль' />
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