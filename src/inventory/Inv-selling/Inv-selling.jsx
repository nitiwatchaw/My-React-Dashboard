import React, { useEffect, useRef, useState } from 'react'
import './Inv-selling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { DataSelling } from '../../component/Data/Data'
const DropdownItem = () => {
    return (
        <>
            <li><a href="#">This Day</a></li>
            <li><a href="#">This Week</a></li>
            <li><a href="#">This Year</a></li>
        </>
    )
}

const InvSelling = () => {
    const ref = useRef()
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener("mousedown", handler, true)
        return () => {
            document.body.removeEventListener('mousedown', handler, true)
        }
    }, [])



    const handlescrollLeft = (e) => {
        e.preventDefault();
        document.querySelector('.wrap-item').style.scrollBehavior = "smooth"
        document.querySelector('.wrap-item').scrollLeft -= 300;
    }
    const handlescrollRight = (e) => {
        e.preventDefault();
        document.querySelector('.wrap-item').style.scrollBehavior = "smooth"
        document.querySelector('.wrap-item').scrollLeft += 300;
    }


    return (
        <div className='selling-item-container'>
            <div className="wrap-header">
                <h2>Other Products Items</h2>
                <div className="wrap-dropdown" ref={ref} >
                    <button onClick={() => { setOpen(!open) }}>This Month <FontAwesomeIcon icon={faChevronDown} /></button>
                    <ul className={`dropdown  ${open ? "active" : ""}`}>
                        <DropdownItem />
                    </ul>
                    <div className="wrap-svg">
                        <button onClick={handlescrollLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button onClick={handlescrollRight}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </div>
            </div>
            <div className="wrap-item" >
                {DataSelling.map((e, i) => {
                    return (
                        <div className="item-sell" key={i}>
                            <img src={e.img} alt={e.title} />
                            <div className="wrap-text">
                                <p>{e.title}</p>
                                <p>{e.amount}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InvSelling


