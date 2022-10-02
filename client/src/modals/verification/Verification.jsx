import React from 'react'
import { useCookies } from 'react-cookie';
import './verification.css'

const Verification = () => {
  const [cookies, setCookie] = useCookies(['boolean']);

  function createCookie() {
    setCookie('verification', 'true', {
      path: '/',
      expires: new Date(new Date().getTime() + 24 * 3600 * 1000)
    });
    window.location.replace('/'); 
  }

  return (
    <>
    <div className={cookies.verification ? 'modal' : 'modal active'}>
      <h1 className='login__title'>ВАМ ЕСТЬ 18 ЛЕТ?</h1>
      <div className='verification__content'>
        <button className='login__btn' onClick={createCookie}>Да, мне есть 18 лет</button>
        <button className='verification__btn'>Мне нет 18 лет</button>
      </div>
    </div>
    </>
  )
}

export default Verification