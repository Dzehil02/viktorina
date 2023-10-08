import avatar from '../../../shared/assets/Avatar.png'
import { Avatar } from '../../../shared/ui/Avatar';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Context } from '../../../main';
import { useContext } from 'react';
import { Button } from '../../../shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../../shared/ui/DropDown';

interface HeaderProps {
    className?: string;
}

export const Header = observer(({ className }: HeaderProps) => {
  const { user } = useContext(Context);
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  const navigateToRegistration = () => {
    navigate('/registration')
  }

  return (
    <header className={classNames(cls.header, {}, [className])}>
      {user.isAuth ? (
        <div>
          <Link to="/">
            <button>Перейти на главную страницу</button>
          </Link>
          <Link to="/tests">
            <button>Перейти к тестам</button>
          </Link>
          <Link to="/ptests">
            <button>Перейти к пройденным тестам</button>
          </Link>

          <Dropdown
            trigger={
              <Avatar
                src={avatar}
                size={50}
                alt="avatar"
                className={classNames(cls.avatar, {}, [className])}
              />
            }
          />
        </div>
      ) : (
        <div className={cls.btnWrapper}>
          <Button onClick={navigateToRegistration} size="m" className={cls.btn}>
            Регистрация
          </Button>
          <Button onClick={navigateToLogin} size="m" className={cls.btn}>
            Войти
          </Button>
        </div>
      )}
    </header>
  );
});