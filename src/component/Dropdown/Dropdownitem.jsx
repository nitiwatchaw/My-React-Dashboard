import React from 'react'
import './Dropdown.css'
const Dropdownitem = ({ itemdata }) => {

    return (
        <li className='dropdownItem'>
            <a href="">{itemdata.title}</a>
        </li>
    )
}

export default Dropdownitem