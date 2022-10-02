import React, {useCallback, useEffect, useState} from 'react'

import axios from 'axios'

import useDebounce from '../../hooks/debounce.hook'

import Input from '../../shared/ui/input/Input'
import SearchResult from './result/SearchResult'

import SearchIcon from '../../img/search.svg'

export default function Search() {
  const [inputValue, setInputValue] = useState('')
  const debounceValue = useDebounce(inputValue, 500)

  const [result, setResult] = useState([])

  const fetchData = useCallback(async () => {
    if (!debounceValue.trim()) return
    const {data} = await axios.get(`/api/products/find/${debounceValue}`)
    setResult(data)
  }, [debounceValue])

  useEffect(() => {
    fetchData()
  }, [debounceValue])

  useEffect(() => {
    if (!inputValue.trim()) {
      setResult([])
    }
  }, [inputValue])

  const onHide = useCallback(() => {
    setResult([])
    setInputValue('')
  }, [])

  return (
      <div className='nav__search'>
        <img src={SearchIcon} />
        <Input onSet={setInputValue} placeholder="Введите название товара или артикул" className={'search__input'} />
        <SearchResult products={result} onHide={onHide} />
      </div>
  )
}