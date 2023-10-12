import { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./EditQuestion.module.scss";
import { Card } from "../../../shared/ui/Card";
import { Title } from "../../../shared/ui/Title";
import { Button } from "../../../shared/ui/Button";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Input } from "../../../shared/ui/Input";
import { Dropdown } from "../../../shared/ui/Dropdown";
import { ListBox } from "../../../shared/ui/ListBox";

export type QuestionVariant = "radio" | "checkbox" | "text";

export interface QuestionDescription {
    description: string;
    type: QuestionVariant;
    order: number;
}

interface EditQuestionProps {
  className?: string;
  questionInfo?: QuestionDescription;
}
export const EditQuestion = observer((props: EditQuestionProps) => {
  const { className, questionInfo} = props;
  const { question } = useContext(Context);

  return (
    <div className={classNames(cls.question, {}, [])}>
      <Title subTitle={String(questionInfo?.order)} />
      <Input
        className={classNames(cls.inputQuestion, {}, [])}
        value={questionInfo?.description}
      />
      <ListBox />
  </div>
  );
});
