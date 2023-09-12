import React from 'react'
import { Datapeople } from '../Data/Data'
import './People.css'
const People = () => {


    const PeopleItem = (props) => {
        const { peopleProps } = props
        return (
            <li className='peopleItem'>
                <img src={peopleProps.img} alt="" />
            </li>
        )
    }

    const peoples = Datapeople.map((people, index) => {
        return (
            <PeopleItem peopleProps={people} key={index} />
        )
    })

    return (
        <>
            {peoples}
        </>
    )
}

export default People