import './App.css'
import Header from './components/Header'

function App() {


  let btn = document.getElementById("btn")
  let header = document.getElementById("heading")
  let add = document.getElementById("btn1")
  let del = document.getElementById("btn2")

  btn.addEventListener("click",changeColor)
  function changeColor() {
      header.style.color = "red"
  }
  add.addEventListener("click",addColor)
  function addColor() {
      header.style.color = "green"
  }
  return (
   
    <>
    <Header/>
    </>
  )
}

export default App
