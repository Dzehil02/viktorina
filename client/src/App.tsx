import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './pages/Auth/Auth'
import { MyTestList } from './pages/TestList/MyTestList/MyTestList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/tests' element={<MyTestList/>}/>
      </Routes>
    </>
  )
}

export default App
