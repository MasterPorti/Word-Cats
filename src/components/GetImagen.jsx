import React, { useState } from 'react'
import Defaul from '../assets/catsDefaul.gif'
import loading from '../assets/loading.gif'

const GetImagen = ({ stop, word, setError, wordCustom, customWord }) => {
  const [imagen, setImagen] = useState('')
  const [load, setLoad] = useState(false)

  function randomNumber () {
    return Date.now()
  }

  const handleSetImg = () => {
    if (stop) {
      const wordToUse = customWord ? wordCustom : word
      if (wordToUse.length === 0) {
        setError(true)
      } else {
        setError(false)
        setLoad(true)
        const number = randomNumber()
        setImagen(`https://cataas.com/cat/gif/says/${wordToUse}?${number}`)
      }
    }
  }

  const handleLoad = () => {
    setLoad(false)
  }
  return (
    <div className='flex flex-col items-center justify-center mt-5 gap-3'>
      <p className='font-bold text-5xl max-[600px]:text-2xl text-center'>Generate Your Imagen</p>
      <p>Press get cat to generate your imagen</p>
      {load && <img src={loading} className='max-h-[30vh]' />}
      <img src={imagen || Defaul} alt='Imagen of cats ' onLoad={handleLoad} className={`max-h-[30vh] ${stop ? '' : 'saturate-0'} ${load ? 'opacity-0 absolute' : ''}`} />
      <button onClick={handleSetImg} className={`${stop ? '' : 'saturate-0'} mt-3 bg-pink-500 text-white font-semibold px-9 py-2 text-lg rounded-xl`}>Get Cat</button>
    </div>
  )
}

export default GetImagen
