import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import cls from "./NewTest.module.scss";
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Context } from '../../../main';
import { Button } from '../../../shared/ui/Button';

interface NewTestProps {
    className?: string;
}

export const NewTest = observer((props: NewTestProps) => {
    const {test} = useContext(Context);

    return (
        <div className={classNames(cls.NewTest, {}, [])}>
            <h1 className={classNames(cls.title, {}, [])}>Создание нового теста</h1>
            <div className={classNames(cls.questionWrapper, {}, [])}>
                <div className={classNames(cls.questionCard, {}, [])}>
                    <div className={classNames(cls.questionHead, {}, [])}>
                        <h2>1. Когда появился ЖабаСкрипт</h2>
                        <Button>Один вариант ответа</Button>
                    </div>
                    <div className={classNames(cls.questionBody, {}, [])}>
                        <div className={classNames(cls.answers, {}, [])}>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice1" name="contact" value="1987" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice1">1987</label>
                            </div>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice2" name="contact" value="1998" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice2">1998</label>
                            </div>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice3" name="contact" value="2003" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice3">2003</label>
                            </div>
                        </div>
                        <Button>+ добавить</Button>
                    </div>
                </div>

                <div className={classNames(cls.questionCard, {}, [])}>
                    <div className={classNames(cls.questionHead, {}, [])}>
                        <h2>2. В чём сила Пайтона</h2>
                        <Button>Один вариант ответа</Button>
                    </div>
                    <div className={classNames(cls.questionBody, {}, [])}>
                        <div className={classNames(cls.answers, {}, [])}>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice1" name="contact" value="power" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice1">В силе</label>
                            </div>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice2" name="contact" value="true" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice2">В правде</label>
                            </div>
                            <div className={classNames(cls.answer, {}, [])}>
                                <input type="radio" id="contactChoice3" name="contact" value="mouse" />
                                <label className={classNames(cls.label, {}, [])} for="contactChoice3">Я мышка</label>
                            </div>
                        </div>
                        <Button>+ добавить</Button>
                    </div>
                </div>

                <div className={classNames(cls.questionCard, {}, [])}> Card 2</div>
            </div>
        </div>
    )
})