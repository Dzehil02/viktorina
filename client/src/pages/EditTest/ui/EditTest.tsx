import { useContext } from "react";
import { observer } from "mobx-react-lite";
import cls from "./EditTest.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Context } from "../../../main";
import { Button } from "../../../shared/ui/Button";
import { Title } from "../../../shared/ui/Title";
import { TestList } from "../../../features/TestList";
import { Card } from "../../../shared/ui/Card";
import Add from "../../../shared/assets/icons/add.svg?react";
import Remove from "../../../shared/assets/icons/remove.svg?react";
import { AddQuestion } from "../../../features/CreateQuestions";
import { AddAnswer } from "../../../features/CreateAnswers";
import { AddQuestionAnswerCard } from "../../../features/AddQuestionAnswerCard";
import { SaveTest } from "../../../features/SaveTest";
import { EditAnswers } from "../../../features/EditAnswers";
import { QuestionDescription } from "../../../features/CreateQuestions/ui/AddQuestion";
import { EditQuestion } from "@/features/EditQuestion";

interface EditTestProps {
  className?: string;
}

type AnswerVariant = "radio" | "checkbox" | "text";

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
    value: "1987",
    correct: false,
  },
  {
    value: "1998",
    correct: true,
  },
  {
    value: "2003",
    correct: false,
  },
  {
    value: "2005",
    correct: false,
  },
];

const answersPython: Answer[] = [
  {
    value: "В простоте",
    correct: true,
  },
  {
    value: "В силе",
    correct: true,
  },
  {
    value: "В питонистах",
    correct: false,
  },
  {
    value: "Я морж",
    correct: false,
  },
];

const answersJava: Answer[] = [
  {
    value: "",
    correct: "ООП",
  },
];

const answer1: AnswerBody = {
  answers: answersJS,
  type: "radio",
};

const answer2: AnswerBody = {
  answers: answersPython,
  type: "checkbox",
};

const answer3: AnswerBody = {
  answers: answersJava,
  type: "text",
};

interface AddAnswerProps {
  className?: string;
  answers: AnswerBody;
}

const emptyQuestionForm: QuestionDescription = {
  description: 'Вопрос про пайтон жабаскрип',
  type: 'radio',
  order: 1
}

export const EditTest = observer((props: EditTestProps) => {
  const { test } = useContext(Context);

  return (
    <div className={classNames(cls.NewTest, {}, [])}>
      <Title align="center" title={"Редактирование теста"} />
      <div className={classNames(cls.questionWrapper, {}, [])}>
        <Card>
          <EditQuestion questionInfo={emptyQuestionForm} />
          <EditAnswers answers={answer1} />
        </Card>
        <Card>
          <EditQuestion questionInfo={emptyQuestionForm} />
          <EditAnswers answers={answer2} />
        </Card>
        <Card>
          <EditQuestion questionInfo={emptyQuestionForm} />
          <EditAnswers answers={answer3} />
        </Card>
      <AddQuestionAnswerCard/>
      </div>
      <SaveTest/>
    </div>
  );
});
