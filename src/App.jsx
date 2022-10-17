import React from 'react'
import './App.css'
import Form from "./Components/Form"
import List from "./Components/List"
import Card from "./Components/ListCard"
import Counter from "./Components/Counter"

function App() {


  return (
    <div className="App grid grid-cols-3 m-8">
    
      <Form/>
      <List />
      <Counter/>
    </div>
  )
}

export default App
