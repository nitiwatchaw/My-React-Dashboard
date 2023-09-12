import React from 'react'
import './FoodItem.css'
import { FoodData } from '../Data/Data'
const FoodItem = () => {


    const FoodItemData = (props) => {
        const { foodProps } = props
        return (
            <li className='Fooditem'>
                <img src={foodProps.img} alt="" />
                <div className="text-wrap">
                    <p>{foodProps.name}</p>
                    <div className="description-wrap">
                        <p>{`${foodProps.order} order`}</p>
                        <span>{`+$${foodProps.amount}`}</span>
                        <p>earned</p>
                    </div>
                </div>
            </li>
        )
    }

    const foods = FoodData.map((food, index) => {
        return (
            <FoodItemData foodProps={food} key={index} />
        )
    })


    return (
        <>
            {foods}
        </>
    )
}

export default FoodItem