import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import the action creators 
import{ ordered, restocked} from './icecreamSlice'


const IceCream = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numberOfIcecream)
  const dispatch = useDispatch()

  return (
    <div>
          <h2>Number of iceCream - {numOfIcecream}</h2>
         <button onClick={() => dispatch(ordered())}>Buy iceCream</button>
         <button onClick={() => dispatch(restocked(4))}>restore iceCream</button>
    </div>
  )
}

export default IceCream