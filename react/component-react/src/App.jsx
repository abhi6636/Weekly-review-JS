import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Contents from './components/contents'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Contents/>
      <Footer/>
    </div>
  )
}

export default App
