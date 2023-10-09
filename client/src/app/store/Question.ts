import { makeAutoObservable } from "mobx";

// export interface QuestionTypes {
    
// }

type QuestionVariant = 'radio' | 'box' | 'input';

interface QuestionDescription {
    description: string;
    type: QuestionVariant;
    order: number;
}

const question1: QuestionDescription = {
    description: 'Вопрос о жабесрип',
    type: 'radio',
    order: 1
}

const question2: QuestionDescription = {
    description: 'Вопрос о путхоне',
    type: 'box',
    order: 2
}

const questions = [question1, question2]

export default class Question {
    constructor() {
        this._questions = questions;
        makeAutoObservable(this);
    }

    setQuestions(questions) {
        this._questions = questions;
    }

    get questions() {
        return this._questions;
    }


}