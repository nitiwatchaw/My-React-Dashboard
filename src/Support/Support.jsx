import React from 'react'
import { BsSearch } from "react-icons/bs";
import './Support.css'
import { dataSupport } from '../component/Data/Data';
const Support = () => {
    return (
        <div className='containerMain support-container'>
            <div className="wrap-header">
                <h4>How we can help your bussiness?</h4>
                <form>
                    <input type="search" placeholder='Search something...' />
                    <button>Search</button>
                    <BsSearch />
                </form>
            </div>
            <div className="wrap-main">
                <h4>Select the section you are interested</h4>
                <div className="grid-wrap">
                    {dataSupport.map((e, i) => {
                        return (
                            <div className='item-support' key={i}>
                                <img src={e.img} alt="support" />
                                <p>{e.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Support