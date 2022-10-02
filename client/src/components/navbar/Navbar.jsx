import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Search from '../search/Search'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-menu'>
            <li className='nav__item'>
                <Link to='/catalog/Электронные сигареты' className='nav-links'>Электронные сигареты</Link>
            </li>
            <li className='nav__item'>
                <Link to='/catalog/Жидкости' className='nav-links'>Жидкости</Link>
            </li>
            <li className='nav__item'>
                <Link to='/catalog/Бокс моды' className='nav-links'>Бокс моды</Link>
            </li>
            <li className='nav__item'>
                <Link to='/catalog/Испарители и картриджи' className='nav-links'>Испарители и картриджи</Link>
            </li>
            <li className='nav__item'>
                <Link to='/catalog/Кальянная продукция' className='nav-links'>Кальянная продукция</Link>
            </li>
            <li className='nav__item'>
                <Link to='/catalog/Комплектующие' className='nav-links'>Комплектующие</Link>
            </li>            
        </ul>
        
        <Search />
    </nav>
  )
}

export default Navbar