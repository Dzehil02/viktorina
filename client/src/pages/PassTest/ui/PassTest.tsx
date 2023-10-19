import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import cls from './PassTest.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Context } from '../../../main';
import { Button } from '../../../shared/ui/Button';
import { Title } from '../../../shared/ui/Title';
import { TestList } from '../../../features/TestList';
import { Card } from '../../../shared/ui/Card';
import { AddQuestion } from '../../../features/CreateQuestions';
import { AddAnswer } from '../../../features/CreateAnswers';
import { PassQuestion } from '@/features/PassQuestion';
import { QuestionVariant } from '@/features/CreateQuestions/ui/AddQuestion';
import { PassAnswers } from '@/features/PassAnswers';

export interface QuestionDescription {
    description: string;
    type: QuestionVariant;
    order: number;
}

interface PassTestProps {
    className?: string;
}

type AnswerVariant = 'radio' | 'checkbox' | 'text';

interface Answer {
    value: string;
    correct: boolean | string;
}

interface AnswerBody {
    answers: Answer[];
    type: AnswerVariant;
}

const answersJS: Answer[] = [
    {
        value: 'Никак !',
        correct: false,
    },
    {
        value: 'А Зачем ?',
        correct: true,
    },
    {
        value: 'Открыть дверь и войти',
        correct: false,
    },
    {
        value: 'С двух ног',
        correct: true,
    },
];

const answersPython: Answer[] = [
    {
        value: 'Путхончек',
        correct: false,
    },
    {
        value: 'Жаба Скреп',
        correct: true,
    },
    {
        value: 'DevOps !!!',
        correct: false,
    },
];

const answersJava: Answer[] = [
    {
        value: '',
        correct: 'ООП',
    },
];

const answer1: AnswerBody = {
    answers: answersJS,
    type: 'checkbox',
};

const answer2: AnswerBody = {
    answers: answersPython,
    type: 'radio',
};

const answer3: AnswerBody = {
    answers: answersJava,
    type: 'text',
};

const questions: QuestionDescription[] = [
    {
        order: 1,
        description: 'Как войти в АйТи?',
        type: 'checkbox',
    },
    {
        order: 2,
        description: 'Бэкенд или Фронтенд?',
        type: 'radio',
    },
    {
        order: 3,
        description: 'Какой ваш любимый язык?',
        type: 'text',
    },
];

interface AddAnswerProps {
    className?: string;
    answers: AnswerBody;
}

export const PassTest = observer((props: PassTestProps) => {
    const { test } = useContext(Context);

    return (
        <div className={classNames(cls.NewTest, {}, [])}>
            <Title
                align='center'
                title={'Прогерский тест'}
            />
            <div className={classNames(cls.questionWrapper, {}, [])}>
                <Card>
                    <PassQuestion questionInfo={questions[0]} />
                    <PassAnswers answers={answer1} />
                </Card>
                <Card>
                    <PassQuestion questionInfo={questions[1]} />
                    <PassAnswers answers={answer2} />
                </Card>
                <Card>
                    <PassQuestion questionInfo={questions[2]} />
                    <PassAnswers answers={answer3} />
                </Card>
            </div>
            <div>
                <Button
                    variant='outline'
                    action='cancel'
                >
                    Выйти
                </Button>
                <Button
                    variant='outline'
                    action='accept'
                >
                    Закончить
                </Button>
            </div>
        </div>
    );
});
