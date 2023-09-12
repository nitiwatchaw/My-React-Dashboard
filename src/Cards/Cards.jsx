import React from 'react'
import "./Cards.css"
import Card from '../Card/Card'
import Dropdown2 from '../Dropdown/Dropdown2'
import { cardData } from '../Data/Data'
import ChartAnalytic from '../Chart/ChartAnalytic'
import FoodItem from '../FoodItem/FoodItem'
import People from '../people/People'
const Cards = () => {
    return (
        <>
            <div className='Cards'>
                {cardData.map((card, index) => {
                    return (
                        <div className="parentContainer" key={index}>
                            <Card
                                icon={card.icon}
                                title={card.title}
                                amount={card.amount}
                                percent={card.percent}
                                iconPercent={card.iconPercent}
                                amountLastYear={card.amountLastYear}
                                color={card.color}
                                series={card.series}
                            />
                        </div>
                    )
                })}


                <div className='chart-section'>
                    <div className="header">
                        <h3>Sales Analytics</h3>
                        <Dropdown2 />
                    </div>
                    <ChartAnalytic />
                </div>


                <div className='item-section'>
                    <h3>Most Popular Items</h3>
                    <ul>
                        <FoodItem />
                    </ul>
                </div>

                <div className="people-section">
                    <h3>Delivery Boy</h3>
                    <ul>
                        <People />
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Cards