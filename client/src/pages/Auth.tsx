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
        </div>
    )
}