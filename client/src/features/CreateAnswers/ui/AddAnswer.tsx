import { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../main";
import cls from "./AddAnswer.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Button } from "../../../shared/ui/Button";
import { QuestionVariant } from "../../../app/store/Question";

//TODO Сделать кнопки в столбик.
//TODO Создать конст (3 эл.) и развернуть в верстку варианты ответов. Пока просто, для чек, для инпут и для радио
//TODO Доделать карточку: вопрос + ответ
//TODO Продумать логику, чтобы в зависимости от варианта ответа на кнопке "добавить" висел слушатель, который будет добавлять правильный HTML элемент. 
//TODO Кнопка удалить имеет mod который скрывает кнопку, если ещё нет ни одного варианта ответа
//TODO Answer и Qestion - ЭТО entities !!!!!! А уже Вся карточка - это features!

type AnswerVariant = 'radio' | 'checkbox' | 'text';

interface Answer {
  value: string;
  correct: boolean
}

interface AnswerBody {
  answers: Answer[],
  type: AnswerVariant;
}

interface AddAnswerProps {
  className?: string;
  answers: AnswerBody;
}

export const AddAnswer = observer((props: AddAnswerProps) => {
  const { className, answers} = props;

  return (
    <div className={classNames(cls.answerBody, {}, [])}>
      <div className={classNames(cls.answers, {}, [])}>

        {answers.answers.map((item, index) => (
          <div className={classNames(cls.answer, {}, [])}>
            <input
              type={answers.type}
              id={item.value}
              value={item.value}
            />
            <label
              className={classNames(cls.label, {}, [])}
              for={item.value}
            >
              {item.value}
            </label>
          </div>
        ))}
{/* 
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice1" name="contact" value="1987" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice1">
            1987
          </label>
        </div>
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice2" name="contact" value="1998" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice2">
            1998
          </label>
        </div>
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice2" name="contact" value="1998" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice2">
            1998
          </label>
        </div>
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice2" name="contact" value="1998" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice2">
            1998
          </label>
        </div>
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice2" name="contact" value="1998" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice2">
            1998
          </label>
        </div>
        <div className={classNames(cls.answer, {}, [])}>
          <input type="radio" id="contactChoice3" name="contact" value="2003" />
          <label className={classNames(cls.label, {}, [])} for="contactChoice3">
            2003
          </label>
        </div> */}
      </div>
      <div className={classNames(cls.btnWrap, {}, [])}>
        <Button>+ добавить ответ</Button>
        <Button className={classNames(cls.btnDelete, {}, [])}>
          - удалить ответ
        </Button>
      </div>
    </div>
  );
});
