import React from 'react'
import './Main.css'
import Header from '../component/Header/Header'
import Overview from '../component/Overview/Overview'
const Main = () => {
    return (
        <div className='containerMain'>
            <Header />
            <Overview />
            
        </div>
    )
}

export default Main