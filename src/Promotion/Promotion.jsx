import React, { useState, useRef, useEffect } from 'react'
import { Promotiondata } from './PromotionData/Promotiondata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './Promotion.css'
const Promotion = () => {

    const [isActive, setActive] = useState(false);


    const handleClick = () => {
        setActive(!isActive);

    };
    let toggleClassCheck = isActive ? 'none' : "";


    return (
        <div className='containerMain'>
            <h1>Promotion</h1>
            <div className="wrap-menu-card">
                <div className="propmotion-title-wrap">
                    <h4>Coupons</h4>
                    <div className={`wrap-for-mobile ${toggleClassCheck}`} >
                        <ul>
                            <li><a href="">Most Recent</a></li>
                            <li><a href="">Bussiness</a></li>
                            <li><a href="">Expiration</a></li>

                        </ul>
                        <button >+</button>
                    </div>
                    <button className='mobile-icon-menu' onClick={handleClick}><i><FontAwesomeIcon icon={faCaretDown} /></i></button>
                </div>
                <div className="card-wrapper">
                    {Promotiondata.map((card, index) => {
                        return (
                            <div className='card-cover' key={index}>
                                <div className='cardPromotion' style={{ background: card.background }} >
                                    <div className="title-card-wrap">
                                        <h5>{card.title}</h5>
                                        <i>{card.icon}</i>
                                    </div>
                                    <p className='amount'>{card.amount}</p>
                                    <p className='descliption'>{card.description}</p>

                                </div>
                                <div className="card-bottom">
                                    <div className="expiry-wrap">
                                        <p>Expiry</p>
                                        <p>{card.expiry}</p>
                                    </div>
                                    <div className="code-wrap">
                                        <p>Coupon Codo</p>
                                        <p>{card.code}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Promotion