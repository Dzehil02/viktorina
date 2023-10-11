import { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./AddAnswer.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Button } from "../../../shared/ui/Button";
import { QuestionVariant } from "../../../app/store/Question";

type AnswerVariant = "radio" | "checkbox" | "text";

// TODO AddAnswer - это будет фича по добавлению и удалению элементов ответа (radio, check)
// А сам Answer - это entitie !!!

interface Answer {
  value: string;
  correct: boolean;
}

interface AnswerBody {
  answers: Answer[];
  type: AnswerVariant;
}

interface AddAnswerProps {
  className?: string;
  answers: AnswerBody;
}

export const AddAnswer = observer((props: AddAnswerProps) => {
  const { className, answers } = props;
  const isLabel = answers.type === "radio" || answers.type === "checkbox";
  const mods = {[cls.hid]: !isLabel}

  const content = (answers: AnswerBody) => {
    if (isLabel) {
      return (
        <div className={classNames(cls.answers, {}, [])}>
        {answers.answers.map((answer) => (
          <div>
            <input type={answers.type} id={answer.value} value={answer.value} />
            {/* Эти лейблы пригодятся на странице прохождения теста и на странице завершенных тестов */}
              {/* <label
                className={classNames(cls.label, {}, [])}
                for={answer.value}
              >
                {answer.value}
              </label> */}
            <input className={classNames(cls.enterAnswer, {}, [])} id={answer.value} value={answer.value} />
          </div>
        ))}
      </div>
        )
    }

    return (
      <div className={classNames(cls.answers, {}, [])}>
      {answers.answers.map((answer) => (
        <div>
            <label
              className={classNames(cls.labelForText, {}, [])}
            >
              {"Введите ответ"}
            </label>
          <input type={answers.type} id={answer.correct+''} value={''} />
        </div>
      ))}
    </div>
    )
  }

  const addVariant = (type: string) => {
    return () => console.log(type)
  }

  return (
    <div className={classNames(cls.answerBody, {}, [])}>
      {content(answers)}
      <div className={classNames(cls.btnWrap, mods, [])}>
        <Button onClick={addVariant(answers.type)}>+ добавить ответ</Button>
        {answers.answers.length > 1 && (
          <Button className={classNames(cls.btnDelete, {}, [])}>
            - удалить ответ
          </Button>
        )}
      </div>
    </div>
  );
});
