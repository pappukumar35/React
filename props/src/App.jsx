import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card
        user="iphone 14"
        age={40000}
        img="https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card user= "iphone15" age={10000} img='https://images.unsplash.com/photo-1765111920677-b37901661563?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user= "iphone16" age={20000} img='https://images.unsplash.com/photo-1736766920756-60137b512e63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user= "iphone17" age={30000} img='https://images.unsplash.com/photo-1763256339987-3f9ecf3f0b78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      <Card />
      <Card />
    </div>
  )
}

export default App
