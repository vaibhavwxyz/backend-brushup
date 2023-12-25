import { useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1>Hello, Vaibhav</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
