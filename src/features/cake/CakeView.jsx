import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//remember to import action creators
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const [value, setValue] = useState(1)
  const numOfCakes = useSelector( state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
         <h2>Number of cakes - {numOfCakes} </h2>
         <button onClick={() => dispatch(ordered())}>Buy cake</button>
         <input type="number"  value={value}  onChange={(e) => setValue(parseInt(e.target.value))} />
         <button onClick={() => dispatch(restocked(value))}>restore cake</button>
    </div>
  )
}

export default CakeView