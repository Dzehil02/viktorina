import { makeAutoObservable } from "mobx";

export interface TestTypes {
    tests: any[];
    setTests: (tests: any[]) => void;
    get tests(): any[];
}

const test1 = {
    id: 1,
    title: 'Тест 1',
    created_at: '23.06.2023',
    count: 5
}

const test2 = {
    id: 2,
    title: 'Тест 2',
    created_at: '24.06.2023',
    count: 6
}

const test3 = {
    id: 3,
    title: 'Тест 3',
    created_at: '24.06.2023',
    count: 6
}

const test4 = {
    id: 4,
    title: 'Тест 4',
    created_at: '24.06.2023',
    count: 6
}

const test5 = {
    id: 5,
    title: 'Тест 5',
    created_at: '24.06.2023',
    count: 6
}

const test6 = {
    id: 6,
    title: 'Тест 6',
    created_at: '24.06.2023',
    count: 6
}

const test7 = {
    id: 7,
    title: 'Тест 7',
    created_at: '24.06.2023',
    count: 6
}

const test8 = {
    id: 8,
    title: 'Тест 8',
    created_at: '24.06.2023',
    count: 6
}

const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test1, test2, test3, test4,]

const ptest1 = {
    id: 1,
    title: 'Тест 1',
    created_at: '23.06.2023',
    result: '5/25'
}

const ptest2 = {
    id: 2,
    title: 'Тест 2',
    created_at: '24.06.2023',
    result: '6/14'
}

const ptest3 = {
    id: 3,
    title: 'Тест 3',
    created_at: '11.09.2021',
    result: '18/20'
}

const ptest4 = {
    id: 4,
    title: 'Тест 4',
    created_at: '12.07.2023',
    result: '32/40'
}


const ptests = [ptest1, ptest2, ptest3, ptest4, ptest1, ptest2, ptest3, ptest4, ptest1, ptest2]


export default class Test implements TestTypes {
    constructor() {
        this._tests = tests;
        this._ptests = ptests;
        makeAutoObservable(this);
    }

    setTests(tests) {
        this._tests = tests;
    }

    setPTests(ptests) {
        this._ptests = ptests;
    }

    get tests() {
        return this._tests;
    }

    get ptests() {
        return this._ptests;
    }

}