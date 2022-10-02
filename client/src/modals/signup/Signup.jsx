import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import { register } from "../../redux/apiCalls";
import axios from 'axios'
import close from '../../img/close.svg'

const Signup = ({active1, setActive1}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();    

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <div className={active1 ? "modal active" : "modal"} onClick={() => setActive1(false)}>
      <div className='close__modal-content'>
        <img src={close}  onClick={() => setActive1(false)} className='close__modal'/>
      </div>
      <h1 className="login__title">РЕГИСТРАЦИЯ</h1>
        <div className='login__content' onClick={e => e.stopPropagation()}>
        <input className="login__input" placeholder="Введите логин" onChange={(e) => setUsername(e.target.value)}></input>
          <input className="login__input" placeholder="Введите электронную почту" type="email" onChange={(e) => setEmail(e.target.value)}></input>
          <input className="login__input" placeholder="Введите пароль" type="password" onChange={(e) => setPassword(e.target.value)}></input>
          <div className="bolcks">
            <div className="login__helps">
                <span>Забыли пароль?</span>
                <span>Запомнить</span>
            </div>
            <button className="login__btn" onClick={handleClick}>Войти</button>              
          </div>
        </div>
    </div>
    )
}

export default Signup