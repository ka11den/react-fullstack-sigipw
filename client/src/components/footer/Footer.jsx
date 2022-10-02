import React from 'react'
import './footer.css'
import instagramm from '../../img/instagramm.svg'
import vk from '../../img/vk.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content container'>
        <div className='footer-left'>
          <h1 className='footer__title'>SIGI.PW</h1>
          <p className='footer__number'>8 888 888-88-88</p>
          <p className='footer__desctiption'>Заказать звонок</p>
          <p className='footer__desctiption'>Обратная связь</p>
        </div>        
        <div className='footer-right'>
          <p className='footer__address'>г. Москва, ул. Пресненская набережная, д. 12, офис 82</p>
          <img className='footer__img' src={instagramm}/>
          <img className='footer__img' src={vk}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer