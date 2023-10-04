import { AppRoutes } from "../../../app/router/consts/consts";
import { classNames } from "../../../shared/lib/classNames/classNames";
import cls from './Main.module.scss';
import { Button } from "../../../shared/ui/Button";
import { useNavigate } from 'react-router-dom';

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const {className} = props;
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate(AppRoutes.LOGIN)
      }
    
    return (
        <div className={classNames(cls.Main, {}, [className])}>
            <Button size="l" className={className} onClick={navigateToLogin}>
                <h3>Добро пожаловать в конструктор тестов!</h3>
            </Button>
        </div>
    )
}