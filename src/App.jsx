
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Dashboard from './Dashboard/Dashboard'
import Order from './Order/Order'
import Promotion from './Promotion/Promotion'
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
        </Routes >
      </div>
    </div>
  )
}

export default App
