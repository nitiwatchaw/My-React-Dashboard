import React, { useState } from 'react'
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Chart from 'react-apexcharts'
const Card = (props) => {

  const [expanded, setExpanded] = useState(false)

  function CompactCard({ param, setExpanded }) {

    return (
      <div className="CompactCard" onClick={setExpanded}>
        <div className="header">
          <i>{param.icon}</i>
          <h3>{param.title}</h3>
        </div>
        <div className="content">
          <p>{`$ ${param.amount}`}</p>
          <p style={{ color: param.color }}>{`+ ${param.percent}`}</p>
          <i style={{ color: param.color }}>{param.iconPercent}</i>
        </div>
        <div className="description">
          <p>Compared to ({`$${param.amountLastYear} last year`})</p>
        </div>
      </div>
    )
  }



  function ExpandedCard({ param, setExpanded }) {
    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
        fill: {
          color: ["#fff"],
          type: "gradient",
        },
        dataLables: {
          enabled: false
        },
        stroke: {
          width: [6],
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          }
        },
        grid: {
          show: true,
        },
        colors: ["#f8981c"],
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.00z",
            "2018-09-19T01:30:00.00z",
            "2018-09-19T02:30:00.00z",
            "2018-09-19T03:30:00.00z",
            "2018-09-19T04:30:00.00z",
            "2018-09-19T05:30:00.00z",
            "2018-09-19T06:30:00.00z",
          ],
          labels: {
            style: {
              colors: "white"
            }
          },
          title: {
            text: "Time",

            style: {
              color: "white",
              fontSize: "16px",
              marginTop: "10px"
            }
          }
        },
        yaxis: [
          {
            title: {
              text: "Text",
              style: {
                color: "white",
                fontSize: "16px",
              },
            },
          }
        ]
      }
    }

    return (
      <div className="bg">
        <div className="ExpandedCard" onClick={setExpanded} >
          <div className="header">
            <span>
              {param.title}
            </span>
            <i>  <FontAwesomeIcon icon={faX} onClick={setExpanded} /></i>
          </div>
          <div className="chartContainer">
            <Chart series={param.series} type="area" options={data.options} />
          </div>

        </div>
      </div>
    )
  }



  return (
    <div>{

      expanded ?
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> :
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />

    }

    </div>
  )
}

export default Card