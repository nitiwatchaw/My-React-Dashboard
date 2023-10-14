import React from 'react'
import './Inventory.css'
import InvHeader from './invHeader/InvHeader'
import InvPack from './InvPack/InvPack'
import InvSelling from './Inv-selling/Inv-selling'
import InvGraph from './Inv-graph/Inv-graph'
import InvFinance from './Inv-Finance/Inv-Finance'
import InvIncome from './Inv-Income/Inv-Income'
import InvExpenses from './Inv-Expenses/Inv-Expenses'
const Inventory = () => {
    return (
        <div className='containerMain inventory-main'>
            <div className=' inventory-section'>
                <InvHeader />
                <InvPack />
            </div>
            <div className="inventory-section-data">
                <InvSelling />
                <InvGraph />
                <InvFinance />
                <InvIncome />
                <InvExpenses />
            </div>
        </div>
    )
}

export default Inventory