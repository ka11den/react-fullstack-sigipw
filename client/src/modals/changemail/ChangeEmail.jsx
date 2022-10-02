import React from 'react'
import { useState } from 'react'
import close from '../../img/close.svg'
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods'

const ChangeEmail = ({active, setActive}) => {
  const userId = useSelector(state => state.user.currentUser?._id)
  const username = useSelector(state => state.user.currentUser?.username)
  const [email, setEmail] = useState('')

  console.log(username)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmail = {
      email: email,
    };
    try {
      const res = await userRequest.put(`/users/${userId}`, newEmail);
      window.location.replace("/profile/" + res.data._id);
    } catch (err) {}
  };
  
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='close__modal-content'>
        <img src={close}  onClick={() => setActive(false)} className='close__modal'/>
      </div>
      <h1 className="login__title">СМЕНА ПОЧТЫ</h1>
      <form onSubmit={handleSubmit}>
        <div className='login__content' onClick={e => e.stopPropagation()}>
          <input className="login__input" placeholder="Введите новую электронную почту" type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <button className="login__btn">Сменить почту</button>              
        </div>
      </form>
    </div>
    )
}

export default ChangeEmail