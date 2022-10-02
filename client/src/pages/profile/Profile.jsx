import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import './profile.css'
import slider1 from '../../img/slider1.png'
import slider2 from '../../img/slider2.png'
import changeSettings from '../../img/settings.png'
import ChangePassword from '../../modals/changepassword/ChangePassword'
import ChangeEmail from '../../modals/changemail/ChangeEmail'
import Address from '../../modals/address/Address'
import edit from '../../img/pencil-line.svg'
import ChangeAddress from '../../modals/сhangeaddress/ChangeAddress'
import { userRequest } from '../../requestMethods';
import { useCallback } from 'react';

const Profile = () => {
  const useremil = useSelector(state => state.user.currentUser?.email)
  const userId = useSelector(state => state.user.currentUser?._id)
  const [modalActive, setModalActive] = useState(false)
  const [modalActive1, setModalActive1] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)
  const [modalActive3, setModalActive3] = useState(false)
  const [orders, setOrders] = useState([])
  const [contacts, setContacts] = useState()
  const [users, setUsers] = useState([])
  const [contact, setContact] = useState([])

  const [targetContact, setTargetContact] = useState(null)

  const activeContact = useMemo(() => {
    return contacts?.find(contact => contact.status === 'true')
  }, [contacts])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`/orders/find/${userId}`);
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get(`/users/find/${userId}`);
        setUsers(res.data);
        setContacts(res.data.contacts)
      } catch {}
    };
    getUsers();
  }, []);

  const openChangeModal = useCallback((contact) => {
    setModalActive3(true)
    setTargetContact(contact)
  }, [])
  
  return (
    <div className='container'>      
      <Address active={modalActive2} setActive={setModalActive2} setContacts={setContacts}/>
      <ChangeEmail active={modalActive1} setActive={setModalActive1}/>
      <ChangePassword active={modalActive} setActive={setModalActive}/> 
      <ChangeAddress
        active={modalActive3}
        setActive={setModalActive3}
        contact={targetContact}
      /> 
      <div className='col-vertical col-left'>
        <article className='profile__panel'>
          <div className='profile__container'>
            <div className='left'>
              <span className='profile__span'>Ваш идентификатор</span>
              <span className='profile__span'>Логин и E-mail</span>
              <span className='profile__span'>ИФО</span>
            </div>
            <div className='right'>
              <span className='profile__span-right'>{userId}</span>
              <span className='profile__span-right'>{useremil}</span>
              <span className='profile__span-right'>{activeContact?.fullname}</span>
            </div>
          </div>
          <div className='center'>
            <span className='profile__settings' onClick={() => setModalActive(true)}>Сменить пароль</span>
            <span className='profile__settings' onClick={() => setModalActive1(true)}>Сменить E-mail</span>
            <span className='profile__settings'>Вкл/выкл</span>
          </div>
        </article>
        <article className='profile__address-add'>
          <h1 className='profile__address-add-title' onClick={() => setModalActive2(true)}>+</h1>
        </article>
        {users?.contacts?.map((contact) => (
          <article className='changeAddress__card'>
              <img src={edit} onClick={openChangeModal.bind(null, contact)} className='profile__address-img' />
              <p className='profile__address-description'>{contact.city} {contact.address}</p>
              {/* <h1 className='profile__address-title'>{contact.address}</h1>
              <p className='profile__address-decription'>Ваш город <span>{contact.city}</span></p>
              <p className='profile__address-decription'>Номер телефона <span>{contact.telephone}</span></p>
              <p className='profile__address-decription'>Статус: {contact.status}</p> */}
          </article>
        ))}
      </div>
      <div className='col-vertical col-right'>      
        <div className='profile__banner'>
          <img className='profile__img' src={slider1} alt='slider1'></img>
          <img className='profile__img' src={slider2} alt='slider2'></img>
        </div>
        <nav className='history__orders-nav'>
          <ul className='orders__item-nav'>
            <li>
              <Link to='/' className='history__orders-links'>История заказов</Link>
            </li>
            <li>
              <Link to='/' className='history__orders-links'>Текущие заказы</Link>
            </li>
            <li>
              <Link to='/' className='history__orders-links'>Все заказы</Link>
            </li>
          </ul>
        </nav>
        {orders.map((order) => (
          <div className='orders__content' key={order._id}>
            <tr className="orders__id">
              <div className='orders__left'>
                <span className='orders__title'>Заказ №{order.products.length}</span>
                <span style={{color: "#474A4F"}} className='orders__title'>от {order.createdAt.slice(11,-5)}</span>
              </div>
              <div className='orders__right'>
                <span style={{color: "#87C232"}} className='orders__title'>{order.status}</span>
                <span className='orders__title'>{order.amount} руб.</span>
              </div>
            </tr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Profile
