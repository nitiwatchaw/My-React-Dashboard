import React, { useState, useRef } from 'react'
import Logo from '/img/Logo.png'
import { menuData } from '../component/Data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'


const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    const [isActive, setActive] = useState(false);


    const handleClick = () => {
        setActive(!isActive);
    };

    let toggleClassCheck = isActive ? 'none' : null
    let coverMenuRef = useRef();


    const SidebarContent = menuData.map((item, id) => {
        return (
            <div key={id}>
                <div className={selected === id ? "icon-menu-bar active" : "icon-menu-bar"}
                    onClick={() => setSelected(id)}>
                    <i>{item.icon}</i>
                    <span>
                        {item.heading}
                    </span>
                </div>

            </div>
        )
    })
    return (
        <>
            {/* logo */}
            <div className={`cover ${toggleClassCheck}`} ref={coverMenuRef}>
                <div className="wrap-menu">
                    <div className='logo-wrap'>
                        <img src={Logo} alt="" />
                        <p>fooddaily</p>

                    </div>

                    {/* Menu */}
                    <div className="menu"  >
                        {SidebarContent }

                        {/* button  when mobile */}
                        <div className="bg-button" onClick={handleClick}>
                            <i><FontAwesomeIcon icon={faChevronLeft} className='buttonClose' /></i>
                        </div>
                    </div>
                </div>
                <div className="icon-menu-bar-footer">
                    <i>   <FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
                    <span>Logout</span>
                </div>


            </div>
            {/* button  when mobile */}
            <div className="bg-button-open" onClick={handleClick}>
                <i><FontAwesomeIcon icon={faChevronRight} className='buttonClose' /></i>
            </div>


        </>
    )
}

export default Sidebar