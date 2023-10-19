import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../main';
import cls from './PassQuestion.module.scss';
import { Title } from '../../../shared/ui/Title';
import { classNames } from '../../../shared/lib/classNames/classNames';

export type QuestionVariant = 'radio' | 'checkbox' | 'text';

export interface QuestionDescription {
    description: string;
    type: QuestionVariant;
    order: number;
}

interface PassQuestionProps {
    className?: string;
    questionInfo?: QuestionDescription;
}
export const PassQuestion = observer((props: PassQuestionProps) => {
    const { className, questionInfo } = props;
    const { question } = useContext(Context);

    return (
        <div className={classNames(cls.questionTitle, {}, [])}>
            <Title className={classNames(cls.questionOrder, {}, [])} subTitle={String(questionInfo?.order)} />
            <Title subTitle={questionInfo?.description} />
        </div>
    );
});
