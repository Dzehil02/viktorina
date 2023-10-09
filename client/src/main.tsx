import React from 'react'
import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import UserStore from './app/store/User.ts'
import TestStore from './app/store/Test.ts'
import QuestionStore from './app/store/Question.ts'

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      test: new TestStore(),
      question: new QuestionStore(),
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
