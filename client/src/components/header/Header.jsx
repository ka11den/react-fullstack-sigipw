import React from 'react'
import './header.css'
import cart from '../../img/cart.svg'
import menu from '../../img/menu.svg'
import close from '../../img/close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'

import Login from '../../modals/login/Login'
import { loginLogout } from '../../redux/userRedux'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [modalActive, setModalActive] = useState(false);
  const [active, setActive] = useState('home')
  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cart.quantity)
  const useremil = useSelector(state => state.user.currentUser?.email)

  const handleActiveClick = (value) => {
    setActive(value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginLogout());
  };

  return (
    <header className='l-header header__container'>
      <Login active={modalActive} setActive={setModalActive}/>      
      <nav className='nav'>
        <div className='nav__logo'>
          <Link to="/"><h1 className='header__logo'>SIGI.PW</h1></Link>
        </div>
        <img src={menu} className={open ? 'menu-icon__active' : 'menu-icon'} onClick={() => setOpen(!open)}/>
        {open ?
          <img src={close}  onClick={() => setOpen(!open)} className='menu-icon-active'/>
          :
          ''
        }
        <div className="nav__menu" style={{top: open ? "0px" : "-150vh"}}>
          <ul className="nav__list">
            {open ?
            <h1>Меню</h1>
            :
            ''
            }
            {open ?
              <div className='nav__profile-mobile'>
                <li className="nav__item nav__link profile__link">
                  <Link to="/profile">{useremil != null ? useremil : ''}</Link>
                </li>
                {useremil != null ? 
                <li className="nav__item nav__link">
                  <span onClick={handleClick}>Выйти</span>
                </li>
                :
                <li className="nav__item nav__link">
                  <span onClick={() => setModalActive(true)}>Войти</span>
                </li>
              }
          </div>
            :
            ''
            }
            <Link to="/">
              <li className={active === 'home' ? 'nav__item nav__link nav__link-active ' : 'nav__item nav__link nav__link-top'} onClick={() => handleActiveClick('home')}>
              Главная
              </li>  
            </Link>
            <Link to="/about">   
              <li className={active === 'about' ? 'nav__item nav__link nav__link-active' : 'nav__item nav__link'} onClick={() => handleActiveClick('about')}>
                О компании
              </li>
            </Link>
            <Link to="/profile">
              <li className={active === 'profi' ? 'nav__item nav__link nav__link-active' : 'nav__item nav__link'} onClick={() => handleActiveClick('profi')}>
                Доставка и оплата
              </li>
            </Link>
            <Link to="/catalog/">
              <li className={active === 'catalog' ? 'nav__item nav__link nav__link-active' : 'nav__item nav__link'} onClick={() => handleActiveClick('catalog')}>
                Прайс-лист
              </li>    
            </Link>
            {open ?
            <li className="nav__item nav__link">
              <Link to="/profile">Профиль</Link>
            </li>
            :
              <li></li>
            }
          </ul>
        </div>
        <div className='header__cart-mobile'>
          <Link to="/cart">
            <span className='cart__count'>{quantity}</span>
            <img src={cart} />
          </Link>
        </div>
      </nav>
      
      <div className='nav__profile'>
        <div className='header__cart'>
          <Link to="/cart">
            <span className='cart__count'>{quantity}</span>
            <img src={cart}></img>
          </Link>
        </div>
          <li className="nav__item nav__link">
            <Link to="/profile">{useremil != null ? useremil : ''}</Link>
          </li>
          {useremil != null ? 
          <li className="nav__item nav__link">
            <span onClick={handleClick}>Выйти</span>
          </li>
          :
          <li className="nav__item nav__link">
            <span onClick={() => setModalActive(true)}>Войти</span>
          </li>
          }
      </div>
    </header>

    // <div className='header__container'>
    //   <nav className='navbar'>
    //   <img src={menu} onClick={() => setOpen(!open)}></img>
    //       <div className='header__wrapper' style={{top: open ? "0px" : "-100vh"}}>              
    //         <h1 className='header__logo'>SIGI.PW</h1>
    //         <div className='header__right'>
    //             <Link className='header__span' to='./'>Главная</Link>
    //             <Link className='header__span' to='./about'>О компании</Link>
    //             <Link className='header__span' to='./profile'>Доставка и оплата</Link>
    //             <Link className='header__span' to='./catalog'>Прайс-лист</Link>
    //         </div>
    //         <div className='header__profile'>                
    //             <div className='header__cart'>
    //               <span className='cart__count'>0</span>
    //               <img src={cart}></img>
    //             </div>                
    //             <span className='header__span'>ogolicht@gmail.com</span>
    //             <span className='header__span'>Выйти</span>
    //         </div>
    //       </div>
    //     </nav>
    // </div>
  )
}

export default Header