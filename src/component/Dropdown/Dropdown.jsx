import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Dropdownitem from './Dropdownitem'
import { dropdownData } from '../Data/Data'
import './Dropdown.css'
const dropdown = () => {

    const [open, setOpen] = useState(false)
    let menuRef = useRef()


    // click outside for close
    // useEffect(() => {
    //     document.addEventListener("mousedown", (event) => {
    //         if (!menuRef.current.contains(event.target)) {
    //             setOpen(false)
    //         }
    //     })
    // })

    const itemData = dropdownData.map((item, index) => {
        return <Dropdownitem key={index} itemdata={item} />
    })


    return (
        <div className="menu-container" ref={menuRef}>
            <div className="menu-trigger" onClick={() => { setOpen(!open) }}>
                <button>Today <FontAwesomeIcon icon={faChevronDown} /> </button>
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <ul>
                    {itemData}
                </ul>
            </div>
        </div>
    )
}

export default dropdown