import './App.css'
import CakeView from './features/cake/CakeView'
import  IceCream  from './features/iceCream/IceCream'
import  User from './features/users/User'


function App() {


  return (
    <div className="App">
      <CakeView/>
      <IceCream/>
      <User/>
    </div>
  )
}

export default App
