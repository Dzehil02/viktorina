import { classNames } from '../../../shared/lib/classNames/classNames';
import { AuthByUsername } from '../../../features/AuthByUsername';

interface AuthProps {
    className?: string;
}

export const Auth = (props: AuthProps) => {

    const {className} = props;
    
    return (<AuthByUsername className={classNames('', {}, [className])}/>)
}