import React from 'react'
import './about.css'
import map from '../../img/maps.png'

const About = () => {
  return (
    <section className='about container'>
      <div className='about__container'>
        <div className='about__data'>
          <h1 className='about__title'>О компании</h1>
          <p className='about__description'>Мы начали работу в 2010 году, чтобы помочь нашим клиентам вести международный бизнес. Мы помогаем разобраться
            аспектами международного налогового планирования и юридической стороной международного бизнеса.

            Мы строим работу на создании дополнительной ценности для клиентов, на своем опыте и знаниях в международном
            праве. Наша специализация - международное налоговое планирование, и мы знаем о нем всё: где и как открыть.

            Наш рынок - крайне консервативен и конфиденциален, информация в открытом доступе стремительно устаревает
            уже за несколько месяцев. Те решения, что работали год назад, сейчас могут эвсего в 800 метрах от Кремля.
          </p>
          <h1 className='about__title'>Наши магазины</h1>
          <p className='about__description'>Выберите регион</p>
        </div>
        <div className='about__content-maps'>
          <div className='maps__data'>
            <p className='maps__choose'>Москва</p>
            <p className='maps__choose'>Сочи</p>
            <p className='maps__choose'>Санкт-петербург</p>
            <p className='maps__choose'>Астрахань</p>            
          </div>
          <div className='maps__right'>
            <p className='maps__btn'>Открыть карту в 2GIS</p>
          </div>
          <img src={map} className='maps__img' width='1760px' height='460px' alt='map sigipw'></img>
        </div>
      </div>
    </section>
  )
}

export default About