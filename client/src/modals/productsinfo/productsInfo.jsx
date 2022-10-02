import React from 'react'
import './productsinfo.css'
import close from '../../img/close.svg'

const productsInfo = ({active, setActive, item}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='close__modal-content'>
        
      </div>
      <div className='product__container container'>
      <img src={close}  onClick={() => setActive(false)} className='product__close'/>
       <img className='prudcts-info__img' src={item.img} alt='product'/>
       <div className='product__content'>
        <h1 className='product__title'>{item.title}</h1>
        <p className='product__desc'>{item.desc}</p>
       </div>
      </div>
    </div>
  )
}

export default productsInfo