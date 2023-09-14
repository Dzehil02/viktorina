import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../app/router/consts/consts";
import { Button } from "../../../shared/ui/Button";

interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {

    const {className} = props;
    
    return (
        <Button className={className}><NavLink to={AppRoutes.LOGIN}>Войти в приложение</NavLink></Button>
    )
}