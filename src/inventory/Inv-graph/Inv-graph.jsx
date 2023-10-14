import React from 'react'
import './Inv-graph.css'
import ReactApexChart from 'react-apexcharts'
import { SaleGraph } from '../../component/Data/Data'
const InvGraph = () => {



    return (
        <div className='SaleGraph'>
            <h2>Sale by City</h2>
            <ReactApexChart options={SaleGraph.options} series={SaleGraph.series} width={320} type="donut" />

        </div>
    )
}

export default InvGraph