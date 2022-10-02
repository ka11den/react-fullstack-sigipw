import React, {useCallback} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods';
import close from '../../img/close.svg'
import './сhangeaddress.css'

export const ChangeAddress = ({ active, setActive, contact }) => {
  const [newContact, setNewContact] = useState({
    city: contact?.city,
    address: contact?.address,
    telephone: contact?.telephone,
    fullname: contact?.fullname,
    comments: contact?.comments,
    status: contact?.status || 'false'
  })

  useEffect(() => {
    if (contact) {
      setNewContact(contact)
    }
  }, [contact])

  const editContact = useCallback(async (switchStatus = false) => {
    try {
      let prepare = newContact
      if (switchStatus) {
        prepare = {...prepare, status: prepare.status === 'false' ? 'true' : 'false'}
        setNewContact(prepare)
      }

      await userRequest.put(
        `/users/edit-contact/${contact?._id}`, prepare
      );
    } catch (err) {
      console.log('UPDATE HANDLER: ', err)
    }
  }, [newContact])

  const updateHandler = useCallback(async (e) => {
    e.preventDefault()
    await editContact()    
  }, [newContact])

  const changeHandler = useCallback(({target: {value}}, prop) => {
    setNewContact(state => {
      state[prop] = value
      return state
    })
  }, [newContact])

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className='close__modal-content'>
        <img src={close}  onClick={() => setActive(false)} className='close__modal-content-chageAddress'/>
      </div>
      <div className='chageAddress__content' onClick={e => e.stopPropagation()}>
        <span className="profile__address-title">Выберите Адресс</span>
        <div className='changeAddress__container'>
        <form onSubmit={updateHandler}>
            <article className='changeAddress__card'>   
              <h1 className='profile__address-descs'>Ваш город</h1>
              <input className="login__input" placeholder="Введите ваш город" defaultValue={newContact?.city} onChange={e => changeHandler(e, 'city')}></input>
              <h1 className='profile__address-descs'>Ваш адресс</h1>
              <input className="login__input" placeholder="Введите ваш адресс" defaultValue={newContact?.address} onChange={e => changeHandler(e,  'address')}></input>
              <h1 className='profile__address-descs'>Ваш номер телефона</h1>
              <input className="login__input" placeholder="Введите номер телефона" defaultValue={newContact?.telephone} onChange={e => changeHandler(e, 'telephone')}></input>
              <h1 className='profile__address-descs'>Ф.И.О</h1>
              <input className="login__input" placeholder="Ф.И.О" defaultValue={newContact?.fullname} onChange={e => changeHandler(e, 'fullname')}></input>
              <h1 className='profile__address-descs'>Комментарий</h1>
              <input className="login__input" placeholder="Комментарии к заказу" defaultValue={newContact?.comments} onChange={e => changeHandler(e, 'comments')}></input>
              <p className='profile__address-decription'>Статус: {newContact?.status}</p>
                <button>  
                  Обновить
                </button>  
              <button type="button" onClick={editContact.bind(null, true)}>switch status</button> 
            </article>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangeAddress
