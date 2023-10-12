import { useContext } from "react";
import { observer } from "mobx-react-lite";
import cls from "./NewTest.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Context } from "../../../main";
import { Button } from "../../../shared/ui/Button";
import { Title } from "../../../shared/ui/Title";
import { TestList } from "../../../features/TestList";
import { Card } from "../../../shared/ui/Card";

import { AddQuestion } from "../../../features/CreateQuestions";
import { AddAnswer } from "../../../features/CreateAnswers";
import { QuestionDescription } from "../../../features/CreateQuestions/ui/AddQuestion";
import { Answer, AnswerBody } from "../../../features/CreateAnswers/ui/AddAnswer";
import { SaveTest } from "../../../features/SaveTest";
import { AddQuestionAnswerCard } from "../../../features/AddQuestionAnswerCard";

interface NewTestProps {
  className?: string;
}

const answersPython: Answer[] = [
  {
    value: "",
    correct: true,
  },
];

const answersJava: Answer[] = [
  {
    value: "",
    correct: "",
  },
];

const answer2: AnswerBody = {
  answers: answersPython,
  type: "checkbox",
};

const answer3: AnswerBody = {
  answers: answersJava,
  type: "text",
};

const emptyQuestionForm: QuestionDescription = {
  description: '',
  type: 'radio',
  order: 1
}

const emptyAnswerForm: AnswerBody = {
  answers: [
    {
      value: "",
      correct: false,
    },
  ],
  type: "radio",
};

export const NewTest = observer((props: NewTestProps) => {
  const { test } = useContext(Context);

  return (
    <div className={classNames(cls.NewTest, {}, [])}>
      <Title align="center" title={"Создание нового теста"} />
      <div className={classNames(cls.questionWrapper, {}, [])}>
        
        <Card>
          <AddQuestion questionInfo={emptyQuestionForm} />
          <AddAnswer answers={emptyAnswerForm} />
        </Card>
        <Card>
          <AddQuestion questionInfo={emptyQuestionForm}/>
          <AddAnswer answers={answer2} />
        </Card>
        <Card>
          <AddQuestion questionInfo={emptyQuestionForm}/>
          <AddAnswer answers={answer3} />
        </Card>

      <AddQuestionAnswerCard/>
      </div>
      <SaveTest/>
    </div>
  );
});
