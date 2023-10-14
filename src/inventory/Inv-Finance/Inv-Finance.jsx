import React, { useEffect, useRef, useState } from 'react'
import './Inv-Finance.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ReactApexChart from 'react-apexcharts'
import { DataFinance } from '../../component/Data/Data'
const InvFinance = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);

    const DropdownFinancial = () => {
        return (
            <>
                <li><a href="#">Last Week</a></li>
                <li><a href="#">Last Month</a></li>
                <li><a href="#">Last Year</a></li>
            </>
        )
    }

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.body.addEventListener("mousedown", handler)
        return () => {
            document.body.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div className='Financial-Container'>
            <div className="wrap-header">
                <h2>Financial Performance</h2>
                <div className="wrap-dropdown">
                    <button onClick={() => { setOpen(!open) }}>Last 6 Month <FontAwesomeIcon icon={faChevronDown} /> </button>
                    <ul className={`dropdown ${open ? 'active' : ''}`} ref={menuRef}>
                        <DropdownFinancial />
                    </ul>
                </div>
            </div>
            <ReactApexChart options={DataFinance.options} series={DataFinance.series} type="bar" height={450} />
        </div >
    )
}

export default InvFinance