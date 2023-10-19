import { useContext, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../main';
import cls from './PassAnswers.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import { QuestionVariant } from '../../../app/store/Question';

export type AnswerVariant = 'radio' | 'checkbox' | 'text';

export interface Answer {
    value: string;
    correct: boolean | string;
}

export interface AnswerBody {
    answers: Answer[];
    type: AnswerVariant;
}

interface PassAnswersProps {
    className?: string;
    answers: AnswerBody;
}

export const PassAnswers = observer((props: PassAnswersProps) => {
    const { className, answers } = props;
    const isLabel = answers.type === 'radio' || answers.type === 'checkbox';
    const mods = { [cls.hid]: !isLabel };

    const content = (answers: AnswerBody) => {
        if (isLabel) {
            return (
                <div className={classNames(cls.answers, {}, [])}>
                    {answers.answers.map((answer) => (
                        <div>
                            <input
                                type={answers.type}
                                id={answer.value}
                                value={answer.value}
                            />
                            <label
                                className={classNames(cls.label, {}, [])}
                                for={answer.value}
                            >
                                {answer.value}
                            </label>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className={classNames(cls.answers, {}, [])}>
                {answers.answers.map((answer) => (
                    <div>
                        <label className={classNames(cls.labelForText, {}, [])}>
                            {'Введите ответ'}
                        </label>
                        <input
                            type={answers.type}
                            id={answer.correct + ''}
                            value={''}
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={classNames(cls.answerBody, {}, [])}>
            {content(answers)}
        </div>
    );
});
