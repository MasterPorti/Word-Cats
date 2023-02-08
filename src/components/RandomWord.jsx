import React, { useEffect, useState } from 'react'

function RandomWord ({ word, setWord, stop, setStop, error, setError }) {
  const fakeWord = ['%^&*#)', '@!+$~{}', '[]<>;:', '/^?|/', '!@#$%&*(', '^%$#@!)', '&+_{}<>', '$%#@!&*', '(^&%$#@)']
  const [button, setButton] = useState('Generate')
  const [customWord, setCustomWord] = useState(false)
  const [toggleButton, setToggleButton] = useState(false)

  useEffect(() => {
    if (stop) return
    if (word === fakeWord[8]) {
      setTimeout(() => setWord(fakeWord[0]), 100)
    } else {
      const index = fakeWord.findIndex((item) => item === word)
      setTimeout(() => setWord(fakeWord[index + 1]), 100)
    }
  }, [word, stop])

  useEffect(() => {
    if (stop) {
      const getRandomWord = async () => {
        const response = await fetch('https://random-word-api.herokuapp.com/word')
        const data = await response.json()
        setTimeout(() => setWord(data[0]), 100)
        setButton('Choose other word')
      }
      getRandomWord()
    }
  }
  , [stop])

  function handleMyWord () {
    if (button === 'Generate') {
      setStop(true)
    } else {
      setStop(false)
      setTimeout(() => setStop(true), 10)
    }
  }
  const customWordHandler = () => {
    setToggleButton(!toggleButton)
    setCustomWord(!customWord)
    setStop(!stop)
    setTimeout(() => setWord(''), 1000)
  }

  const customRandomHandler = () => {
    setError(false)
    setToggleButton(false)
    setCustomWord(!customWord)
    setStop(false)
  }

  return (

    <div className='flex justify-center flex-col gap-4 items-center mt-12 max-[600px]:gap-1'>
      <h2 className='font-bold text-5xl max-[600px]:text-2xl text-center'>Random Word Generator</h2>
      <p className='text-center'>Press generate to get your word or press 'My word' to type your word</p>
      <div className='flex items-center gap-2'>
        {!customWord && <p placeholder='#*$&8' className='text-center bg-transparent border-b-4 text-5xl outline-none border-blue-500 w-[20rem] h-[4rem] max-[600px]:h-[3rem] max-[600px]:w-[50vw] max-[600px]:text-3xl'>{word}</p>}
        {customWord && <input placeholder='#*$&8' className='text-center bg-transparent border-b-4 text-5xl outline-none border-pink-500 w-[20rem] h-[4rem] max-[600px]:h-[3rem] max-[600px]:w-[50vw] max-[600px]:text-3xl' value={word} onChange={(e) => setWord(e.target.value)} />}
        {customWord &&
          <button
            onClick={customRandomHandler}
            className='mt-3 bg-indigo-600 text-white font-semibold px-9 py-2 text-lg rounded-xl max-[600px]:px-5'
          >Random Word
          </button>}
        {!customWord &&
          <button
            onClick={customWordHandler}
            className='mt-3 bg-indigo-600 text-white font-semibold px-9 py-2 text-lg rounded-xl max-[600px]:px-5'
          >Custom Word
          </button>}
      </div>
      {error && <p className='mt-0 bg-red-600 text-white font-semibold px-9 py-2 text-lg rounded-xl max-[600px]:px-5 '>Type a Word!!!!</p>}
      <button onClick={handleMyWord} className={`mt-0 bg-blue-700 max-[600px]:px-5 text-white font-semibold px-9 py-2 text-lg rounded-xl ${customWord ? 'hidden' : ''}`}>{button}</button>
    </div>

  )
}

export default RandomWord
