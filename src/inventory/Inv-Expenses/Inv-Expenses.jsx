import React, { useEffect, useState, useRef } from 'react'
import './Inv-Expenses.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ReactApexChart from 'react-apexcharts'
import { DataInvExpense } from '../../component/Data/Data'
const InvExpenses = () => {


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
        <div className='Expense-Contianer'>
            <div className="wrap-header">
                <h2>Expense</h2>
                <div className="wrap-dropdown">
                    <button onClick={() => { setOpen(!open) }}>This Month <FontAwesomeIcon icon={faChevronDown} /></button>
                    <ul className={`dropdown ${open ? "active" : ""}`} ref={menuRef}>
                        <IncomeDropdown />
                    </ul>
                </div>
            </div>
            <h3>
                $10,450k
            </h3>
            <ReactApexChart options={DataInvExpense.options} series={DataInvExpense.series} type="line" height={100} />


        </div>
    )
}

export default InvExpenses