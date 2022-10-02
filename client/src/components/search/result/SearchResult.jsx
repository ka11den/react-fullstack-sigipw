import React, {useCallback} from 'react'
import Product from '../../product/Product'
import classes from './searchResult.module.css'

export default function SearchResult({products, onHide}) {
  const numberToMoney = useCallback((money) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'narrowSymbol'
    }).format(money)
  }, [])

  return (
    <>
      {
        !!products.length && (
          <>
            <div className={classes.Container}>
              <div className={classes.Background}>
                {
                  products.map((product, idx) => (
                    <Product item={product} key={idx}/>
                  ))
                }
              </div>
            </div>
          </>
        )
      }
    </>
  )
}