import { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./AddQuestion.module.scss";
import { Card } from "../../../shared/ui/Card";
import { Title } from "../../../shared/ui/Title";
import { Button } from "../../../shared/ui/Button";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Input } from "../../../shared/ui/Input";
import { Dropdown } from "../../../shared/ui/Dropdown";
import { ListBox } from "../../../shared/ui/ListBox";

interface AddQuestionProps {
  className?: string;
}
export const AddQuestion = observer((props: AddQuestionProps) => {
  const { className, } = props;
  const { question } = useContext(Context);

  return (
    <>
      {question.questions.map((item, index) => (
        <div className={classNames(cls.question, {}, [])}>
          <Title subTitle={item.order} />
          <Input
            className={classNames(cls.inputQuestion, {}, [])}
            value={item.description}
          />
          <ListBox />
        </div>
      ))}
    </>
  );
});
