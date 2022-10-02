import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import SignUp from '../../modals/signup/Signup'
import { useSelector } from "react-redux";

const ProductList = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [modalActive2, setModalActive2] = useState(true)
  const [modalActive, setModalActive] = useState(false)

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  
  return (
    <div className='container'>
      {user !== null ?
        <SignUp active1={modalActive} setActive1={setModalActive}/>
        :
        <SignUp active1={modalActive2} setActive1={setModalActive2}/>
      }
      <Navbar/>      
      <Products cat={cat} filters={filters} sort={sort} />
    </div>
  )
}

export default ProductList