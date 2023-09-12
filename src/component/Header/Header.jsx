import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMicrophone, faBell } from '@fortawesome/free-solid-svg-icons'
import ProfileImg from '/img/profile.jpg'
const Header = () => {

    const ProfileData =
    {
        img: ProfileImg,
        Place: "Restaurant",
        Name: "Tondra"
    }

    return (
        <>
            <div className="wrap-header">

                <form action="">
                    <input type="serach" className='searchInput' placeholder=' Search...' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
                    <FontAwesomeIcon icon={faMicrophone} className='microphoneIcon' />
                </form>

                <div className="profile-wrap">
                    <img src={ProfileData.img} alt="" />
                    <div className="wrap-text">
                        <p>{ProfileData.Place}</p>
                        <p>{ProfileData.Name}</p>
                    </div>
                    <i> <FontAwesomeIcon icon={faBell} /></i>
                </div>


            </div>


        </>
    )
}

export default Header