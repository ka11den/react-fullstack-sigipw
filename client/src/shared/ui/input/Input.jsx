import React, {useCallback} from 'react'
import classes from './input.module.css'

export default function Input({onSet, placeholder, className}) {
  const changeHandler = useCallback((event) => {
    onSet(event.target.value)
  }, [])

  return (
    <input
      placeholder={placeholder}
      onChange={changeHandler}
      className={`${classes.Input} ${className || ''}`}
    />
  )
}