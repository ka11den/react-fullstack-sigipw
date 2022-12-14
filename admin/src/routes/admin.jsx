import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Topbar from '../components/topbar/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import Home from '../pages/home/Home'
import UserList from '../pages/userList/UserList'
import User from '../pages/user/User'
import NewUser from '../pages/newUser/NewUser'
import ProductList from '../pages/productList/ProductList'
import Product from '../pages/product/Product'
import NewProduct from '../pages/newProduct/NewProduct'
import OrderList from '../pages/orderList/OrderList'
import Order from '../pages/Order/Order'

export default function AdminRoutes() {
  return (
    <Switch>
      <>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <Product/>
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route>
          <Route path="/orders">
            <OrderList/>
          </Route>
          <Route path="/order/:orderId">
            <Order/>
          </Route>
          <Redirect from="**" to="/"/>
        </div>
      </>
    </Switch>
  )
}