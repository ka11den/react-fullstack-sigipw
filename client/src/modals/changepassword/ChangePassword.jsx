import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import close from '../../img/close.svg'
import { userRequest } from '../../requestMethods'

const ChangePassword = ({active, setActive}) => {
  const userId = useSelector(state => state.user.currentUser?._id)
  const username = useSelector(state => state.user.currentUser?.username)
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPassword = {
      password: password,
    };
    try {
      const res = await userRequest.put(`/users/change/${userId}`, newPassword);
      window.location.replace("/profile/");
    } catch (err) {}
  };

  return (
  <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
    <div className='close__modal-content'>
      <img src={close}  onClick={() => setActive(false)} className='close__modal'/>
    </div>
    <h1 className="login__title">СМЕНА ПАРОЛЯ</h1>
    <form onSubmit={handleSubmit}>
      <div className='login__content' onClick={e => e.stopPropagation()}>
        <input className="login__input" placeholder="Введите новый пароль" onChange={(e) => setPassword(e.target.value)}></input>
          <button className="login__btn">Сменить пароль</button>              
      </div>
    </form>
  </div>
  )
}

export default ChangePassword