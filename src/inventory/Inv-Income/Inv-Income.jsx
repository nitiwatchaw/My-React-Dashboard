import React, { useEffect, useState, useRef } from 'react'
import './Inv-Income.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ReactApexChart from 'react-apexcharts'
import { DataInvIncome } from '../../component/Data/Data'
const InvIncome = () => {

    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
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

    const IncomeDropdown = () => {
        return (
            <>
                <li><a href="#">This Day</a></li>
                <li><a href="#">This Week</a></li>
                <li><a href="#">This Month</a></li>
            </>
        )
    }

    return (
        <div className='Income-Contianer'>
            <div className="wrap-header">
                <h2>Income</h2>
                <div className="wrap-dropdown">
                    <button onClick={() => { setOpen(!open) }}>This Month <FontAwesomeIcon icon={faChevronDown} /></button>
                    <ul className={`dropdown ${open ? "active" : ""}`} ref={menuRef}>
                        <IncomeDropdown />
                    </ul>
                </div>
            </div>
            <h3>
                $40,600k
            </h3>
            <ReactApexChart options={DataInvIncome.options} series={DataInvIncome.series} type="line" height={100} />


        </div>
    )
}

export default InvIncome