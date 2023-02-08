import './App.css'
import Hearder from './components/Hearder'
import RandomWord from './components/RandomWord'

import { useState } from 'react'
import GetImagen from './components/GetImagen'
function App () {
  const [word, setWord] = useState('')
  const [stop, setStop] = useState(false)
  const [error, setError] = useState(false)
  return (
    <div className='App'>
      <Hearder />
      <RandomWord word={word} setWord={setWord} stop={stop} setStop={setStop} error={error} setError={setError} />
      <GetImagen stop={stop} word={word} setError={setError} />
    </div>
  )
}

export default App
