import React, { useEffect, useRef, useState } from 'react'
import profile from '/img/profile.jpg'
import './Section-1.css'
import { BsFillCameraFill, BsCalendar3 } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { BiMap, BiDotsVerticalRounded } from "react-icons/bi";
import { HiPencil } from "react-icons/hi2";
import { AiFillCaretDown } from "react-icons/ai";



const Section1 = () => {


    const [open, setOpen] = useState(false)
    const menuRef = useRef();
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 998px)").matches
    )

    const handleClick = (e) => {
        setOpen(!open);
        e.preventDefault();
    }

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)

            }

        }
        document.body.addEventListener("mousedown", handler)
        return () => (
            document.body.removeEventListener("mousedown", handler)
        )
    })

    useEffect(() => {
        window
            .matchMedia("(max-width: 998px)")
            .addEventListener('change', e => setMatches(e.matches));
    })




    const Dropdown = () => {
        return (
            <>
                <li><a href="">option1</a></li>
                <li><a href="">option2</a></li>
                <li><a href="">option3</a></li>
            </>
        )
    }


    return (
        <div className="section-1">
            <div className="header-section">
                <div className="bg-profile">
                    <button><BsFillCameraFill /> Update Cover</button>
                </div>
            </div>
            <div className="info-section">
                <div className="wrap-img">
                    <img src={profile} alt="" />
                    <a href='#' className="edit">
                        <HiPencil />

                    </a>

                </div>
                <div className="wrap-profile">
                    <h5>Cameron Rogers</h5>
                    <div className="wrap-detail-profile">
                        <div >
                            <AiOutlineLaptop />
                            <p>Developer</p>
                        </div>
                        <div>
                            <BiMap />
                            <p>New York</p>
                        </div>
                        <div>
                            <BsCalendar3 />
                            <p>Joined March 17</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="left">
                        <p>Profile Completion</p>
                        <div className="progress-wrap">
                            <div className="progress-bar">
                            </div>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className="right">
                        <button>Follow</button>
                        <button>Hire Me</button>
                        <button onClick={handleClick}>
                            {matches && <AiFillCaretDown />}
                            {!matches && <BiDotsVerticalRounded />}
                        </button>
                        <ul className={`${open ? "activeDropdown" : ""}`} ref={menuRef}>
                            <Dropdown />
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1