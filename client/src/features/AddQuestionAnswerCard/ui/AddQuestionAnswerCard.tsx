import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../main';
import cls from './SaveTest.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import Add from '../../../shared/assets/icons/add.svg?react';
import Remove from '../../../shared/assets/icons/remove.svg?react';

interface AddQuestionAnswerCardProps {
    className?: string;
}
export const AddQuestionAnswerCard = observer(
    (props: AddQuestionAnswerCardProps) => {
        const { className } = props;

        return (
            <div>
                <Button
                    size='s'
                    variant='clear'
                >
                    <Add />
                </Button>
                <Button
                    size='s'
                    variant='clear'
                >
                    <Remove />
                </Button>
            </div>
        );
    },
);
