import React, { useState } from 'react'
import './BussinessHour.css'
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const BussinessHour = () => {
    const [setThisValue, setsetThisValue] = useState(0)
    const [open, setOpen] = useState(false)



    return (
        <div className='containerMain '>
            <div className="hour-container">
                <div className={`list ${open ? "activeList" : ""}`}>
                    <ul>
                        <li><a href="#">Default</a></li>
                    </ul>
                    <FiMenu className='menu' onClick={() => { setOpen(!open) }} />
                </div>
                <form>
                    <div className="header">
                        <div className="name-wrap">
                            <label htmlFor="bussinessHour">Name:</label>
                            <input type="text" placeholder='Default' name='name' onChange={() => { setThisValue }} />
                        </div>
                        <div className="wrap-time">
                            <label htmlFor="html">Timezone:</label>
                            <input type="text" value="US/Pacific" name='time' onChange={() => { setThisValue }} />
                        </div>
                    </div>

                    <div className="left-side">

                        <div className="day-wrap">
                            <h3>Bussiness Hours</h3>
                            <ul>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" defaultChecked />
                                        <label htmlFor="html">Monday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='monday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='monday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" defaultChecked />
                                        <label htmlFor="html">Tuesday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='tuesday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='tuesday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" defaultChecked/>
                                        <label htmlFor="html">Wednesday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='wednesday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='wednesday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" />
                                        <label htmlFor="html">Thursday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='thursday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='thursday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" />
                                        <label htmlFor="html">Friday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='friday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='friday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" />
                                        <label htmlFor="html">Saturday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='saturday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='saturday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>
                                <li>
                                    <div className="wrap-check">
                                        <input type="checkbox" />
                                        <label htmlFor="html">Sunday</label>
                                    </div>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='sunday start' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                    <label htmlFor="html">to</label>
                                    <div className="input-wrap">
                                        <input type="text" value="09:00:00" name='sunday end' onChange={() => { setThisValue }} />
                                        <AiOutlineClockCircle />
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="right-side">

                        <div className="wrap-message">
                            <h3>Away Message</h3>
                            <textarea name="message" id="message" onChange={() => { setThisValue }}></textarea>
                        </div>
                    </div>

                    <input type="submit" className="like" value="Save" onChange={() => { setThisValue }} />
                </form>
            </div>
        </div>
    )
}

export default BussinessHour