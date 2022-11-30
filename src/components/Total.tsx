import React from 'react'
import {useSelector} from"react-redux"
import { RootState } from '../app/store'
const Total = () => {
  const total = useSelector((state:RootState) => state.cart.total)
  return (
    <div>
      <h1>Total</h1>
      <h2> ₹ {total}</h2>
    </div>
  )
 
}

export default Total