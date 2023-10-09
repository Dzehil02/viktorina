import { makeAutoObservable } from "mobx";

export interface UserTypes {
    setIsAuth: (isAuth: boolean) => void;
    setUser: (user: any) => void;
    get isAuth(): boolean;
    get user(): any;
}


export default class User implements UserTypes {
    constructor() {
        this._isAuth = true;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}