import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './NewTest.module.scss'
import { Context } from '../../../main';

interface NewTestProps {
    className?: string;
}

export const NewTest = observer((props: NewTestProps) => {
    const {test} = useContext(Context);

    return (
        <div>
            NEW TEST
        </div>
    )
})