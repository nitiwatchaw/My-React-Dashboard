import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { dropdownData2 } from '../Data/Data'
import './Dropdown.css'
import DropdownItem2 from './DropdownItem2'
const Dropdown2 = () => {

    const [open, setOpen] = useState(false)
    let menuRef2 = useRef();


    useEffect(() => {
        const clickOutside = (event) => {
            if (!menuRef2.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.body.addEventListener("mousedown", clickOutside)

        return () => {
            document.body.removeEventListener("mousedown", clickOutside)
        }
    })


    const itemData = dropdownData2.map((item, index) => {
        return (
            <li key={index}>
                <DropdownItem2 title={item} />
            </li>
        )
    })

    return (
        <div className="menu-container2" ref={menuRef2}>
            <div className="menu-trigger" onClick={() => { setOpen(!open) }}>
                <button>This Week <FontAwesomeIcon icon={faChevronDown} /> </button>
            </div>
            <div className={`dropdown-menu2 ${open ? "active" : "inactive"}`}>
                <ul>
                    {itemData}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown2