import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import { Link } from 'react-router-dom' 
import checkMark from "../../img/check-mark.svg";
import './success.css'

const Success = () => {
  const cart = useSelector(state => state.cart)
  const id = useSelector((state) => state.user?.currentUser._id);
  const [order, setOrder] = useState([]);

  console.log(id)

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post(`/orders/find/${id}`)
        setOrder(res.data)
      } catch {}
    };
    createOrder();
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {order
        ? 
        <>
          <img src={checkMark} /><div className="success__content">
            <span className="success__title">Ваш заказ была принят!</span>
          </div>
        </>
        :
        <>
          <div className="success__content">
            <span className="success__title">Ошибка {order}</span>
          </div>
        </>
      }
      <Link to='/cart'>
        <button style={{ padding: 10, marginTop: 20 }}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Success;