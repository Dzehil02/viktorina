import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/Auth/Auth'
import { MyTestList } from './pages/TestList/MyTestList/MyTestList'
import { Header } from './component/Header/Header'
import { PassedTestList } from './pages/TestList/PassedTestList/PassedTestList'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/tests' element={<MyTestList/>}/>
        <Route path='/ptests' element={<PassedTestList/>}/>
      </Routes>
    </>
  )
}

export default App
