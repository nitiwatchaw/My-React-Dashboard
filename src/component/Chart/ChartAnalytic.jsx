
import React from 'react'
import './Chart.css'
import ReactApexChart from 'react-apexcharts'

const ChartAnalytic = () => {

    const chartData = {
        series: [{
            name: 'Expense',
            data: [190, 150, 200, 220, 270, 230, 240]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            grid:{
                xaxis: {
                    lines: {
                        show: true
                    }
                },  
                yaxis: {
                    lines: {
                        show: false
                    }
                }, 
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#459a7d'],
            fill: {
                colors: ['#459a7d'],

            },
            legend: {
                fontSize: "32px"
            },
            stroke: {
                curve: 'smooth',
                width: "3"
            },
            xaxis: {
                type: 'String',
                categories: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],

            },

            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    }

    return (
        <div >
            <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={390} className="chartAnalytic" />
        </div>
    )
}

export default ChartAnalytic



