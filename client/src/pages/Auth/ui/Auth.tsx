import { Suspense } from 'react';
import { AuthByUsername } from '../../../features/AuthByUsername';

interface AuthProps {
    className?: string;
}

const Auth = (props: AuthProps) => {
    const { className } = props;

    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <AuthByUsername className={className} />
        </Suspense>
    );
};

export default Auth;
