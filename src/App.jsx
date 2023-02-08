import './App.css'
import Hearder from './components/Hearder'
import RandomWord from './components/RandomWord'

import { useState } from 'react'
import GetImagen from './components/GetImagen'
function App () {
  const [word, setWord] = useState('')
  const [wordCustom, setWordCustom] = useState('')
  const [stop, setStop] = useState(false)
  const [error, setError] = useState(false)
  const [customWord, setCustomWord] = useState(false)
  return (
    <div className='App'>
      <Hearder />
      <RandomWord
        word={word}
        setWord={setWord}
        stop={stop}
        setStop={setStop}
        error={error}
        setError={setError}
        setWordCustom={setWordCustom}
        wordCustom={wordCustom}
        customWord={customWord}
        setCustomWord={setCustomWord}
      />
      <GetImagen
        stop={stop}
        word={word}
        setError={setError}
        wordCustom={wordCustom}
        customWord={customWord}
      />
    </div>
  )
}

export default App
