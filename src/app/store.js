import { configureStore} from '@reduxjs/toolkit'
import   cakeReducer  from '../features/cake/cakeSlice'
import  iceCreamReducer  from '../features/iceCream/icecreamSlice'
import   userReducer  from '../features/users/userSlice'


const store = configureStore({
     reducer: {
       cake: cakeReducer,
       icecream: iceCreamReducer,
       user: userReducer
     }
})

export default store