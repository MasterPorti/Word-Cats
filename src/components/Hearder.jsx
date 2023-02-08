import React from 'react'
import logo from '../assets/logo.svg'
import egg from '../assets/egg.gif'
import './styles.scss'
function Hearder (props) {
  return (
    <div className='flex mt-4 justify-center w-screen items-center gap-4 '>
      <img src={logo} className='w-[4rem]' alt='logo' />
      <p className='font-bold text-2xl cursor-pointer dropShadow text-center'>WORD & CATS</p>
      <img src={egg} className='w-[4rem]' alt='egg' />
    </div>
  )
}

export default Hearder
