import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import cls from "./NewTest.module.scss";
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Context } from '../../../main';
import { Button } from '../../../shared/ui/Button';
import { Title } from '../../../shared/ui/Title';
import { TestList } from '../../../features/TestList';
import { Card } from '../../../shared/ui/Card';
import Add from '../../../shared/assets/icons/add.svg?react';

interface NewTestProps {
    className?: string;
}

export const NewTest = observer((props: NewTestProps) => {
    const {test} = useContext(Context);

    return (
      <div className={classNames(cls.NewTest, {}, [])}>
        <Title align="center" title={"Создание нового теста"} />
        <div className={classNames(cls.questionWrapper, {}, [])}>
          <Card className={classNames(cls.questionCard, {}, [])}>
            <div className={classNames(cls.questionHead, {}, [])}>
              <Title subTitle={"1. Когда появился ЖабаСкрипт"} />
              <Button>Один вариант ответа</Button>
            </div>
            <div className={classNames(cls.questionBody, {}, [])}>
              <div className={classNames(cls.answers, {}, [])}>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="1987"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice1"
                  >
                    1987
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="1998"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice2"
                  >
                    1998
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="2003"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice3"
                  >
                    2003
                  </label>
                </div>
              </div>
              <Button>+ добавить</Button>
            </div>
          </Card>
          <Card className={classNames(cls.questionCard, {}, [])}>
            <div className={classNames(cls.questionHead, {}, [])}>
              <Title subTitle={"1. Когда появился ЖабаСкрипт"} />
              <Button>Один вариант ответа</Button>
            </div>
            <div className={classNames(cls.questionBody, {}, [])}>
              <div className={classNames(cls.answers, {}, [])}>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="1987"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice1"
                  >
                    1987
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="1998"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice2"
                  >
                    1998
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="2003"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice3"
                  >
                    2003
                  </label>
                </div>
              </div>
              <Button>+ добавить</Button>
            </div>
          </Card>

          <Card className={classNames(cls.questionCard, {}, [])}>
            <div className={classNames(cls.questionHead, {}, [])}>
              <Title subTitle={"2. В чём сила Пайтона"} />
              <Button>Один вариант ответа</Button>
            </div>
            <div className={classNames(cls.questionBody, {}, [])}>
              <div className={classNames(cls.answers, {}, [])}>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="power"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice1"
                  >
                    В силе
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="true"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice2"
                  >
                    В правде
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="mouse"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice3"
                  >
                    Я мышка
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="power"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice1"
                  >
                    В силе
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="true"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice2"
                  >
                    В правде
                  </label>
                </div>
                <div className={classNames(cls.answer, {}, [])}>
                  <input
                    type="radio"
                    id="contactChoice3"
                    name="contact"
                    value="mouse"
                  />
                  <label
                    className={classNames(cls.label, {}, [])}
                    for="contactChoice3"
                  >
                    Я мышка
                  </label>
                </div>
              </div>
              <Button>+ добавить</Button>
            </div>
          </Card>
          <Card>
            <>
              <div className={classNames(cls.questionHead, {}, [])}>
                <Title subTitle={"2. В чём сила Пайтона"} />
                <Button>Один вариант ответа</Button>
              </div>
              <div className={classNames(cls.questionBody, {}, [])}>
                <div className={classNames(cls.answers, {}, [])}>
                  <div className={classNames(cls.answer, {}, [])}>
                    <input
                      type="radio"
                      id="contactChoice1"
                      name="contact"
                      value="power"
                    />
                    <label
                      className={classNames(cls.label, {}, [])}
                      for="contactChoice1"
                    >
                      В силе
                    </label>
                  </div>
                  <div className={classNames(cls.answer, {}, [])}>
                    <input
                      type="radio"
                      id="contactChoice2"
                      name="contact"
                      value="true"
                    />
                    <label
                      className={classNames(cls.label, {}, [])}
                      for="contactChoice2"
                    >
                      В правде
                    </label>
                  </div>
                  <div className={classNames(cls.answer, {}, [])}>
                    <input
                      type="radio"
                      id="contactChoice3"
                      name="contact"
                      value="mouse"
                    />
                    <label
                      className={classNames(cls.label, {}, [])}
                      for="contactChoice3"
                    >
                      Я мышка
                    </label>
                  </div>
                </div>
                <Button>+ добавить</Button>
              </div>
            </>
          </Card>
          <Button size="s" variant='clear'>
            <Add />
          </Button>
        </div>
        <div>
            <Button variant='outline' action='cancel'>Отменить</Button>
            <Button variant='outline' action='accept'>Сохранить</Button>
        </div>
      </div>
    );
})