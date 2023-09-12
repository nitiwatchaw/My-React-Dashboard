import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'
const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Dashboard