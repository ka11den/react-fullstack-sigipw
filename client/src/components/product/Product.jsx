import React from 'react'
import product from '../../img/product.png'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import cart from '../../img/cart.svg'
import Modal from '../../modals/productsinfo/productsInfo'

const Product = ({item}) => {
  const user = useSelector((state) => state.user.currentUser);
  const [quantity, setQuantity] = useState(1)
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch()

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if(user) {
      dispatch(addProduct({...item, quantity}))
    } else {
      
    }
    
  }

  return (
    <div className='cart__products'>      
      <div className='products__container'>
        <img className='products__img-cart' onClick={() => setModalActive(true)} src={product} width='48px' height='48px'/>
        <p className='products__title-cart'>{item.title}</p>
        <p className='products__qty-cart'>1</p>        
        <p className='products__price-cart'>{item.price}</p>
        <div className='products__counter'>
          <span className='counter__minus' onClick={() => handleQuantity("dec")}>-</span>
          <p className='counter'>{quantity}</p>
          <span className='counter__plus' onClick={() => handleQuantity("inc")}>+</span>          
        </div>
        <img className='products-cart__btn' onClick={handleClick} src={cart}></img>
        <Modal active={modalActive} setActive={setModalActive} item={item}/>
      </div>
    </div>
  )
}   

export default Product