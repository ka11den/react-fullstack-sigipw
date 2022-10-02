import React, {useEffect, useState, useCallback, useMemo} from 'react'
import './cart.css'
import {useDispatch, useSelector} from 'react-redux'
import {userRequest} from '../../requestMethods'
import Address from '../../modals/address/Address'
import {addProduct, removeProduct} from '../../redux/cartRedux'
import ChangeAddress from '../../modals/сhangeaddress/ChangeAddress'
import edit from '../../img/pencil-line.svg'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const currentUser = useSelector(state => state.user.currentUser);
  const [modalActive2, setModalActive2] = useState(false)
  const [modalActive3, setModalActive3] = useState(false)
  const userId = currentUser?._id
  const [users, setUsers] = useState([])
  const [contacts, setContacts] = useState()
  const [targetContact, setTargetContact] = useState(null)

  const activeContact = useMemo(() => {
    return contacts?.find(contact => contact.status === 'true')
  }, [contacts])

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

  const createOrder = async () => {
    try {
      const res = await userRequest.post("/orders", {
        userId: currentUser._id,
        products: cart.products.map((item) => ({
          productId: item._id,
          quantity: item._quantity,
        })),
        amount: cart.total,
        city: activeContact?.city,
        address: activeContact?.address,
        fio: activeContact?.fullname,
        phone: activeContact?.telephone,
        comments: activeContact?.comments,
      });
      window.location.replace("/success/");
    } catch {}
  };

  console.log(activeContact?.address)

  const addHandler = useCallback((product) => {
    dispatch(addProduct(product))
  }, [])

  const removeHandler = useCallback((product) => {
    dispatch(removeProduct(product))
  }, [])

  const openChangeModal = useCallback((contact) => {
    setModalActive3(true)
    setTargetContact(contact)
  }, [])

  return (
    <div className='container'>
      <Address active={modalActive2} setActive={setModalActive2} setContacts={setContacts}/>
      <ChangeAddress
        active={modalActive3}
        setActive={setModalActive3}
        contact={targetContact}
      /> 
      <div className='col-vertical col-left__cart'>
        <div className='profile__content'>
          <h1 className='adres__title'>Выберите адрес доставки</h1>
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
      </div>

      

      <div className='col-vertical col-right__cart'>
        <div className='col__right__content'></div>
        <div className='cart__products-content'>
        {cart.products.map((product, idx) => (
          <div className='cart__products' key={idx}>
          <div className='products__container-cart'>
            <img className='products__img-cart' src={product.img} alt='product img' width='48px' height='48px'/>
            <p className='products__title-cart'>{product.title}</p>
            <div className='products__counter'>
              <button
                className='counter__minus'
                onClick={removeHandler.bind(null, product)}
              >
                -
              </button>
              <p className='counter'>{product.quantity}</p>
              <button className='counter__plus' onClick={addHandler.bind(null, product)}>+</button>
            </div>
            <p className='products__title-cart'>{product.price * product.quantity}</p>
          </div>
        </div>
        ))}
        </div>
        { (cart.quantity === 0) ?
          ''
        :
          <div className='cart__total'>
            <h1 className='cart__title'>Итог <span>{cart.total} руб.</span></h1>
            <div className='cart__btns'>
              <button className='cart__btn'>Товаров {cart.quantity}</button>
              <button className='cart__btn buy' onClick={createOrder}>Оформить заказ</button>
            </div>
          </div>
        }
      </div>
    </div>    
  )
}

export default Cart