import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import products1 from '../../img/1.png'
import products2 from '../../img/2.png'
import products3 from '../../img/3.png'
import products4 from '../../img/4.png'
import products5 from '../../img/5.png'
import products6 from '../../img/6.png'
import slider1 from '../../img/slider1.png'
import slider2 from '../../img/slider2.png'
import Slider from '../../components/slider/Slider'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className='container'>
      <div className='home__banner'>
        <div className='home__slider'>
          <Slider/>
        </div>
        <div className='profile__banner'>
          <img className='home__img' src={slider1} alt='slider 1'></img>
          <img className='home__img' src={slider2} alt='slider 2'></img>
        </div>
      </div>
      <Navbar/>
      <section className='catalog'>
        <div className='catalog__container'>          
          <article className='products__card'>
          <Link to='/catalog/Электронные сигареты'>
          <img className='products__img' src={products1} alt='product'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Электронные сигареты
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>          
          <article className='products__card'>
          <Link to='/catalog/Жидкости'>
          <img className='products__img' src={products2} alt='product2'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Жидкости
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>
          <article className='products__card'>
          <Link to='/catalog/Испарители и картриджи'>
          <img className='products__img' src={products3} alt='product3'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Испарители и картриджи
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>
          <article className='products__card'>
          <Link to='/catalog/Кальянная продукция'>
          <img className='products__img' src={products4} alt='product4'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Кальянная продукция
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>
          <article className='products__card'>
          <Link to='/catalog/Комплектующие'>
          <img className='products__img' src={products5} alt='product5'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Комплектующие
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>
          <article className='products__card'>
          <Link to='/catalog/Бокс моды'>
          <img className='products__img' src={products6} alt='product6'></img>
            <div className='porudcts__data'>
              <h1 className='products__title'>
                Бокс моды
              </h1>
              <p className='products__description'>
                Перейти в каталог
              </p>            
            </div>
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Home