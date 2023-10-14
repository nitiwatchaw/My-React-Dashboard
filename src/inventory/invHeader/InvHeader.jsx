import React, { useState } from 'react'
import './InvHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'
import people from '../../../img/profile.jpg'
const InvHeader = () => {

    const [open, setOpen] = useState(false)


    return (
        <div className={`header ${open ? "activeOpen" : ""} `}>
            <div className='search-wrap'>
                <input type="search" placeholder='search' />
                <i className='search-icon' onClick={() => { setOpen(!open) }}> <FontAwesomeIcon icon={faSearch} /></i>
                <i className='close-icon' onClick={() => { setOpen(!open) }}><FontAwesomeIcon icon={faXmark} /></i>
            </div>
            <div className='wrap-acount'>
                <i> <FontAwesomeIcon icon={faBell} /></i>
                <div className="profile">
                    <img src={people} alt="" />
                    <div className="wrap-text">
                        <h5>Cameron Rogers</h5>
                        <p>Manager</p>
                    </div>
                    <i> <FontAwesomeIcon icon={faAngleDown}  /></i>
                </div>
            </div>
        </div>
    )
}

export default InvHeader