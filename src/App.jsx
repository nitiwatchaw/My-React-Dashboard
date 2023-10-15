
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Dashboard from './Dashboard/Dashboard'
import Order from './Order/Order'
import Promotion from './Promotion/Promotion'
import Inventory from './inventory/Inventory'
import BussinessHour from './BussinessHour/BussinessHour'
import Support from './Support/Support'
import Setting from './Setting/Setting'
import { Route, Routes } from 'react-router-dom'
function App() {


  return (
    <div className='App'>
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='promotion' element={<Promotion />}></Route>
          <Route path='inventory' element={<Inventory />}></Route>
          <Route path='bussinessHour' element={<BussinessHour />}></Route>
          <Route path='support' element={<Support />}></Route>
          <Route path='setting' element={<Setting />}></Route>
        </Routes >
      </div>
    </div>
  )
}

export default App
