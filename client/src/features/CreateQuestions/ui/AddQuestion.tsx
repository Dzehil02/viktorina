import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./AddQuestion.module.scss";
import { Card } from "../../../shared/ui/Card";
import { Title } from "../../../shared/ui/Title";
import { Button } from "../../../shared/ui/Button";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Input } from "../../../shared/ui/Input";
import { Dropdown } from "../../../shared/ui/DropDown";

interface AddQuestionProps {
  className?: string;
}

export const AddQuestion = observer((props: AddQuestionProps) => {
  const { className } = props;
  const { question } = useContext(Context);

  const items = [
    {
      content: "Один вариант ответа",
      onclick: () => console.log('1')
    },
    {
      content: "Несколько вариантов ответа",
      onclick: () => console.log('2')
    },
    {
      content: "Вписать ответ",
      onclick: console.log('3')
    },
  ];

  // TODO: Тут нужно подключить Listbox вместо дропдавна, и в него записать варианты ответа. 
  // Затем реализовать логику при выборе варианта должен меняться html: input, checkbox, radio
  // Перенести стили для карточки с вопросами

  return (
      <Card className={classNames(cls.questionCard, {}, [])}>
        {question.questions.map((item, index) => (
            <div className={classNames(cls.questionHead, {}, [])}>
            <Title subTitle={item.order} />
            <Input value={item.description} />
            <Dropdown
                trigger={<Button>{item.type}</Button>}
                items={items}
            />
            </div>
        ))}
      </Card>
  );
});
