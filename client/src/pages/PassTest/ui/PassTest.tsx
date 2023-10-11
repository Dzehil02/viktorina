import { useContext } from "react";
import { observer } from "mobx-react-lite";
import cls from "./PassTest.module.scss";
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

interface PassTestProps {
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

export const PassTest = observer((props: PassTestProps) => {
  const { test } = useContext(Context);

  return (
    <div className={classNames(cls.NewTest, {}, [])}>
      <Title align="center" title={"Прохождение теста"} />
      <div className={classNames(cls.questionWrapper, {}, [])}>
        <Card>
          <AddQuestion />
          <AddAnswer answers={answer1} />
        </Card>
        <Card>
          <AddQuestion />
          <AddAnswer answers={answer2} />
        </Card>
        <Card>
          <AddQuestion />
          <AddAnswer answers={answer3} />
        </Card>
        <Button size="s" variant="clear">
          <Add />
        </Button>
        <Button size="s" variant="clear">
          <Remove />
        </Button>
      </div>
      <div>
        <Button variant="outline" action="cancel">
          Отменить
        </Button>
        <Button variant="outline" action="accept">
          Сохранить
        </Button>
      </div>
    </div>
  );
});
