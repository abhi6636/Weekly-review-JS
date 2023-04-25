import React from 'react'
import Logged from './Logged'
import Notlogged from './Notlogged'


const Main = ({isLoggedin}) => {
  return (
    <div>
        {isLoggedin?<Logged/>:<Notlogged/>}
    </div>
  )
}

export default Main