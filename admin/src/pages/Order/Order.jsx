import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import { useSelector } from 'react-redux'
  import { useState } from "react";
  import "./user.css";
  import { userRequest } from "../../requestMethods";
  import { useLocation } from 'react-router-dom'
  import { useEffect } from "react";
  
  export default function Order() {
    const location = useLocation()
    const userId = location.pathname.split("/")[2]
    const [status, setStatus] = useState("")
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
      const getUsers = async () => {
        try {
          const res = await userRequest.get(`/users/find/${userId}`);
          setUsers(res.data);
        } catch {}
      };
      getUsers();
    }, []);
  
    useEffect(() => {
      const getOrders = async () => {
        try {
          const res = await userRequest.get(`/orders/get/${userId}`);
          setOrders(res.data);
        } catch {}
      };
      getOrders();
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newOrder = {
        status: status,
      };
      try {
        const res = await userRequest.put(`/orders/${orders._id}`, newOrder);
        window.location.replace("/orders/" + res.data._id);
      } catch (err) {}
    };    

    console.log(orders)
  
    return (  
      <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Изменить заказ</h1>
          </div>
          <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="userShowImg" />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{users?.username}</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">{users?.username}</span>
                  </div>
                  <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">{orders.phone}</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">{users?.email}</span>
                  </div>
                  <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">{orders.address}</span>
                  </div>               
                </div>
              </div>
              <div className="userUpdate">
                <span className="userUpdateTitle">Изменить</span>
                {orders?.products?.map((product) => (
                  <form key={product.id}>
                    {product.productId}
                    {product.quantity}
                    {product._id}
                  </form>
                ))}
                <form onSubmit={handleSubmit}>
                  <input onChange={(e) => setStatus(e.target.value)}></input>
                  <button>Обновить</button>
                </form>
              </div>              
            </div>
      </div>
      
    );
  }