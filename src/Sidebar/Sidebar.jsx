import React, { useState } from 'react'
import Logo from '/img/Logo.png'
import { menuData } from '../component/Data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {

    const [open, setOpen] = useState(false)

    const closeTab = () => {
        window.open("about:blank", "_self");
    };

    return (
        <>
            <div className={`cover ${open ? 'none' : ''}`} >
                <div className="wrap-menu">
                    <div className='logo-wrap'>
                        <img src={Logo} alt="logo icon" />
                        <p>fooddaily</p>
                    </div>

                    <div className="menu"  >
                        {menuData.map((item, id) => {
                            return (
                                <div key={id} >
                                    <NavLink className={`${id.current ? " active" : "icon-menu-bar"}`}
                                        to={item.path} >
                                        <i>{item.icon}</i>
                                        <span>
                                            {item.heading}
                                        </span>
                                    </NavLink>
                                </div>
                            )
                        })}


                        {/* button  when mobile */}
                        <div className="bg-button" onClick={() => { setOpen(!open) }}>
                            <i><FontAwesomeIcon icon={faChevronLeft} className='buttonClose' /></i>
                        </div>
                    </div>
                </div>
                <div className="icon-menu-bar-footer" onClick={closeTab}>
                    <i>   <FontAwesomeIcon icon={faArrowRightFromBracket} /></i>
                    <span>Logout</span>
                </div>


            </div >
            {/* button  when mobile */}
            <div div className="bg-button-open" onClick={() => { setOpen(!open) }} >
                <i><FontAwesomeIcon icon={faChevronRight} className='buttonClose' /></i>
            </div >


        </>

    )
}

export default Sidebar