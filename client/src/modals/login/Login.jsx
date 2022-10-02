import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import close from '../../img/close.svg'
import './login.css'

import Signup from '../signup/Signup'

const Login = ({active, setActive}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalActive1, setModalActive1] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();    

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
    <Signup active1={modalActive1} setActive1={setModalActive1} />
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='close__modal-content'>
        <img src={close}  onClick={() => setActive(false)} className='close__modal'/>
      </div>
      <h1 className="login__title">АВТОРИЗАЦИЯ</h1>
      <div className='login__content' onClick={e => e.stopPropagation()}>
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
      <div className="login__content">
        <div className="login__register">
          <span>Вы еще не зарегистрированы?</span>
          <button className="login__btn-register" onClick={() => setModalActive1(true)}>Регистрация</button>
        </div>
      </div>
    </div>
    </>
    )
}

export default Login