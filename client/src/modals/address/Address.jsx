import React, {useCallback} from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods'
import close from '../../img/close.svg'
import ChangeAddress from '../../modals/сhangeaddress/ChangeAddress'

const Address = ({ active, setActive, setContacts }) => {
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [fullname, setFullname] = useState('')
  const [comments, setComments] = useState('')
  const [modalActive, setModalActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const infoOrder = {
      contacts: {city,address,telephone,fullname,comments},
    };
    try {
      await userRequest.patch(`/users/add-contact`, infoOrder);
      window.location.replace("/profile/");
    } catch (err) {}
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <ChangeAddress
        active={modalActive}
        setActive={setModalActive}
      />
      <div className='close__modal-content'>
        <img src={close}  onClick={() => setActive(false)} className='close__modal'/>
      </div>
      <h1 className="login__title">Добавление Контактов</h1>
      <form onSubmit={handleSubmit}>
        <div className='login__content' onClick={e => e.stopPropagation()}>
          <input className="login__input" placeholder="Введите ваш город" onChange={(e) => setCity(e.target.value)}></input>
          <input className="login__input" placeholder="Введите ваш адресс" onChange={(e) => setAddress(e.target.value)}></input>
          <input className="login__input" placeholder="Введите номер телефона" onChange={(e) => setTelephone(e.target.value)}></input>
          <input className="login__input" placeholder="Ф.И.О" onChange={(e) => setFullname(e.target.value)}></input>
          <input className="login__input" placeholder="Комментарии к заказу" onChange={(e) => setComments(e.target.value)}></input>
          <button className="login__btn">Добавить</button>
        </div>
      </form>
    </div>
  )
}

export default Address
