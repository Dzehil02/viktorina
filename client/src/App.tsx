import './App.scss'
import { AppRouter } from './app/router'
import { Footer } from './widgets/Footer'
import { Header } from './widgets/Header'

function App() {

  return (
    <div className='app'>
      <Header />
      <AppRouter/>
      <Footer/>
    </div>
  )
}

export default App
