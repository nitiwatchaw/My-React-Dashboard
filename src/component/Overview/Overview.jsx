import React from 'react'

import Dropdown from '../dropdown/dropdown'
import Cards from '../Cards/Cards'
import './OverView.css'
const Overview = () => {


    return (
        <>
            <div className="wrap-overview">
                <h2>Overview</h2>
                <Dropdown />
            </div>
            <Cards />
        </>
    )
}

export default Overview