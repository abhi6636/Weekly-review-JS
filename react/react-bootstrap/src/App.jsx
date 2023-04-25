import { useState } from 'react'
import States from './components/States'
import Main from './components/conditional/Main'
import Keys from './components/keys/Keys'
import Products from './components/products/Products'
import { Container } from 'react-bootstrap'

function App() {

const  [count,setCount] = useState(0)
function addCount(){
  setCount(count+1)
} 
function decreaseCount(){
  setCount(count-1)
}

  return (
    <>
        {/* <div>
        <h1>Count is :<i>{count}</i></h1>
      <button className='m-2 bg-success' onClick={addCount}>+</button>
      <button onClick={decreaseCount}>-</button>
        </div>
        <div>
          <h1>States</h1> <br />
          <States name = "Kearala"/>
          <States name = "Tamilnadu"/>
          <States name = "Karnataka"/>\
          <States name = "AndraPradesh"/>
          <States name = "Telangana"/>
          <States name = "Assam"/>
          <States name = "Bihar"/>
          <States name = "Punjab"/>
          <States name = "Gujarat"/>
          <States name = "Himachal Pradesh"/>
          <States name = "Maharashtra"/>
          <States name = "Odisha"/>
        </div> */}

        {/* <Main isLoggedin={false}/> */}

        {/* <Keys/> */}
        <Container>
        <Products/>
        </Container>
    </>
  )
}

export default App
